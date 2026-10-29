"""Convert the static RSP pages into React (JSX) pages and components.

Static parts are converted mechanically; interactive sections are written to their own
component files (marked by an element id) and then wired up by hand.
"""
import json, os, re, sys
from html.parser import HTMLParser

SRC, OUT = sys.argv[1], sys.argv[2]

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}
ATTR = {
    "class": "className", "for": "htmlFor", "tabindex": "tabIndex", "autocomplete": "autoComplete",
    "srcset": "srcSet", "fetchpriority": "fetchPriority", "viewbox": "viewBox",
    "preserveaspectratio": "preserveAspectRatio", "stroke-width": "strokeWidth",
    "stroke-linecap": "strokeLinecap", "stroke-linejoin": "strokeLinejoin",
    "stroke-dasharray": "strokeDasharray", "vector-effect": "vectorEffect", "fill-rule": "fillRule",
    "clip-rule": "clipRule", "maxlength": "maxLength", "readonly": "readOnly", "colspan": "colSpan",
    "rowspan": "rowSpan",
}
BOOL_ATTRS = {"hidden", "required", "disabled", "checked"}
ROUTES = {"index.html": "/", "about.html": "/about", "services.html": "/services",
          "projects.html": "/projects", "contact.html": "/contact"}
INTERACTIVE = [  # element id inside a top-level section -> component name
    ("rock-btn", "RockBreaker"), ("planner", "BasementPlanner"), ("project-grid", "ProjectGrid"),
    ("ba-range", "RockToReadySlider"), ("map-pins", "ProjectMap"), ("fleet-grid", "FleetBoard"),
    ("enquiry", "ContactPanel"),
]


class Node:
    def __init__(self, tag, attrs):
        self.tag, self.attrs, self.children = tag, attrs, []


class TreeBuilder(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("#root", [])
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Node(tag, attrs))

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        while self.stack[-1].tag != tag:
            self.stack.pop()
        self.stack.pop()

    def handle_data(self, data):
        self.stack[-1].children.append(data)


def parse(html):
    b = TreeBuilder()
    b.feed(html)
    return b.root


def split_decls(s):
    out, buf, depth, quote = [], "", 0, None
    for ch in s:
        if quote:
            buf += ch
            if ch == quote:
                quote = None
        elif ch in "'\"":
            quote = ch
            buf += ch
        elif ch == "(":
            depth += 1
            buf += ch
        elif ch == ")":
            depth -= 1
            buf += ch
        elif ch == ";" and depth == 0:
            out.append(buf)
            buf = ""
        else:
            buf += ch
    out.append(buf)
    return [d.strip() for d in out if d.strip()]


def camel(prop):
    if prop.startswith("-webkit-"):
        prop = "Webkit-" + prop[len("-webkit-"):]
    parts = prop.split("-")
    return parts[0] + "".join(p[:1].upper() + p[1:] for p in parts[1:])


def style_obj(s):
    items = []
    for decl in split_decls(s):
        prop, _, val = decl.partition(":")
        items.append(f"{camel(prop.strip())}: {json.dumps(val.strip(), ensure_ascii=False)}")
    return "{{ " + ", ".join(items) + " }}"


class Ctx:
    def __init__(self, page):
        self.page, self.uses_link, self.uses_img = page, False, False


def img_expr(path, ctx):
    ctx.uses_img = True
    return "img(" + json.dumps(path[len("assets/img/"):]) + ")"


def attr_jsx(tag, name, value, ctx):
    if name == "style":
        return "style=" + style_obj(value)
    if name in BOOL_ATTRS and (value is None or value == "" or value == name):
        return name
    if value is None:
        value = ""
    if name == "class":
        if "hero-scrim" in value.split():
            value = value + " hero-scrim--" + ctx.page
    if tag == "img" and name == "src" and value.startswith("assets/img/"):
        return "src={" + img_expr(value, ctx) + "}"
    if tag == "img" and name == "srcset":
        ctx.uses_img = True
        tpl = re.sub(r"assets/img/([^\s,]+)", lambda m: "${img(" + json.dumps(m.group(1)) + ")}", value)
        return "srcSet={`" + tpl + "`}"
    jname = ATTR.get(name, name)
    if name == "value" and tag in ("input", "textarea"):
        jname = "defaultValue"
    if '"' in value or "{" in value or "&" in value:
        return f"{jname}={{{json.dumps(value, ensure_ascii=False)}}}"
    return f'{jname}="{value}"'


def text_jsx(t):
    t = re.sub(r"\s+", " ", t)
    t = t.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return t.replace("{", "{'{'}").replace("}", "{'}'}")


def is_mixed(node):
    for c in node.children:
        if isinstance(c, str) and (c.strip() or (c and "\n" not in c)):
            return True
    return False


def emit(node, ctx, indent):
    pad = "  " * indent
    tag = node.tag
    attrs = list(node.attrs)
    if tag == "a":
        href = dict(attrs).get("href", "")
        if href in ROUTES:
            tag = "Link"
            ctx.uses_link = True
            attrs = [("to", ROUTES[href]) if k == "href" else (k, v) for k, v in attrs]
    parts = [attr_jsx(node.tag, k, v, ctx) for k, v in attrs]
    open_tag = "<" + tag + ("" if not parts else " " + " ".join(parts))
    if node.tag in VOID or not node.children:
        return pad + open_tag + " />"
    if is_mixed(node):
        inner = "".join(text_jsx(c) if isinstance(c, str) else emit(c, ctx, 0).strip() for c in node.children)
        return pad + open_tag + ">" + inner.strip() + "</" + tag + ">"
    lines = [pad + open_tag + ">"]
    for c in node.children:
        if isinstance(c, str):
            continue
        lines.append(emit(c, ctx, indent + 1))
    lines.append(pad + "</" + tag + ">")
    return "\n".join(lines)


def elements(node):
    return [c for c in node.children if not isinstance(c, str)]


def find_id(node, wanted):
    if isinstance(node, str):
        return False
    if dict(node.attrs).get("id") == wanted:
        return True
    return any(find_id(c, wanted) for c in node.children)


def imports(ctx, extra=()):
    lines = []
    if ctx.uses_link:
        lines.append("import { Link } from 'react-router-dom';")
    if ctx.uses_img:
        lines.append("import { img } from '../lib/assets';")
    lines.extend(extra)
    return "\n".join(lines) + ("\n\n" if lines else "")


def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write(text)
    print("wrote", os.path.relpath(path, OUT))


def component_file(name, nodes, page):
    ctx = Ctx(page)
    body = "\n".join(emit(n, ctx, 2) for n in nodes)
    wrapped = body if len(nodes) == 1 else "    <>\n" + "\n".join(emit(n, ctx, 3) for n in nodes) + "\n    </>"
    return imports(ctx) + f"export default function {name}() {{\n  return (\n{wrapped}\n  );\n}}\n"


PAGES = [("index.html", "Home", "home", "Home"), ("about.html", "About", "about", "About & Safety"),
         ("services.html", "Services", "services", "Services & Fleet"),
         ("projects.html", "Projects", "projects", "Projects"), ("contact.html", "Contact", "contact", "Contact")]

for file, comp, key, title in PAGES:
    with open(os.path.join(SRC, file), encoding="utf-8") as f:
        html = f.read()
    body = html.split("<body>", 1)[1].rsplit("</body>", 1)[0]
    root = elements(parse(body))[0]  # the page wrapper div
    sections = []
    used = []
    for child in elements(root):
        attrs = dict(child.attrs)
        if child.tag in ("header", "footer") or (child.tag == "div" and attrs.get("aria-hidden") == "true"):
            if file == "index.html":
                name = {"header": "Header", "footer": "Footer"}.get(child.tag, "Marquee")
                sections.append(("layout", name, child))
            continue
        hit = next((c for i, c in INTERACTIVE if find_id(child, i)), None)
        sections.append(("component", hit, child) if hit else ("static", None, child))
    if file == "contact.html":
        footer = next(c for c in elements(root) if c.tag == "footer")
        write(os.path.join(OUT, "src", "components", "_generated", "FooterCompact.jsx"), component_file("FooterCompact", [footer], key))
    ctx = Ctx(key)
    lines, comp_imports = [], []
    marquees = [n for kind, name, n in sections if kind == "layout" and name == "Marquee"]
    for kind, name, node in sections:
        if kind == "layout":
            if name != "Marquee":
                write(os.path.join(OUT, "src", "components", "_generated", name + ".jsx"), component_file(name, [node], key))
            continue
        if kind == "component":
            write(os.path.join(OUT, "src", "components", name + ".jsx"), component_file(name, [node], key))
            comp_imports.append(f"import {name} from '../components/{name}';")
            lines.append(f"      <{name} />")
        else:
            lines.append(emit(node, ctx, 3))
    if marquees:
        write(os.path.join(OUT, "src", "components", "_generated", "Marquees.jsx"), component_file("Marquees", marquees, key))
    page_src = (imports(ctx, ["import usePageTitle from '../lib/usePageTitle';"] + comp_imports) +
                f"export default function {comp}() {{\n  usePageTitle({json.dumps(title)});\n  return (\n    <>\n" +
                "\n".join(lines) + "\n    </>\n  );\n}\n")
    write(os.path.join(OUT, "src", "pages", comp + ".jsx"), page_src)
    if file == "index.html":
        wrapper = dict(root.attrs).get("style", "")
        print("ROOT STYLE:", wrapper)
