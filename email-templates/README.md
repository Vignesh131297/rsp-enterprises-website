# Enquiry emails and WhatsApp

When a visitor submits the **Request a quote** form:

1. **Email (automatic):** the enquiry is emailed to `pm@rspenterprises.net` through [EmailJS](https://www.emailjs.com). No server is needed, so this works on GitHub Pages and any static host. Free plan: 200 emails/month.
2. **WhatsApp (one tap):** the visitor gets a button that opens WhatsApp to +91 99010 39765 with the same text already typed in.

If email is not set up yet (or EmailJS is down), the form says so and offers WhatsApp, plus an email link that opens the visitor's own mail app.

The text is identical on both channels (built in `src/lib/enquiry.js`):

```
Hi RSP, I have an enquiry from your website.
Name: Ramesh Kumar
Company: ABC Builders
Phone / WhatsApp: 98450 12345
Email: ramesh@abcbuilders.com
Service needed: Excavation & rock breaking
Site location: Whitefield, Bangalore
Project details: 2-level basement, approx. 8,000 sq ft plot
```

Email subject: `Website enquiry – <service> – <name>`.

## Setting up EmailJS (one time, about 5 minutes)

1. Create a free account at https://www.emailjs.com.
2. **Email Services → Add New Service → Gmail** and connect the mailbox the emails should be sent from (for example `rspenterprises2013@gmail.com`). Copy the **Service ID**.
3. **Email Templates → Create New Template**:
   - **Content → Edit Content → Code:** paste the `<div …>{{message}}</div>` line from `enquiry.html`.
   - **Subject:** `{{subject}}`
   - **To Email:** `pm@rspenterprises.net` (use your own address while testing)
   - **Bcc:** `rspenterprises2013@gmail.com` (optional)
   - **From Name:** `RSP Website`
   - **Reply To:** `{{customer_email}}`, so pressing Reply answers the customer directly.
   - Save and copy the **Template ID**.
4. **Account → General:** copy the **Public Key**. It is designed to be used in websites and is not a password.
5. **Account → Security:** under allowed origins, add the site's address (for example `https://vignesh131297.github.io`) so nobody else can send through this account.
6. In GitHub: **Settings → Secrets and variables → Actions → Variables**, add `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID` and `EMAILJS_PUBLIC_KEY`. Then re-run the **Deploy to GitHub Pages** workflow (or push any change).

For local development, copy `.env.example` to `.env.local` and fill in the same three values.

## Template variables

| Variable             | Value                                  |
| -------------------- | -------------------------------------- |
| `{{message}}`        | The enquiry text shown above           |
| `{{subject}}`        | `Website enquiry – <service> – <name>` |
| `{{customer_name}}`  | Visitor's name                         |
| `{{customer_phone}}` | Visitor's phone                        |
| `{{customer_email}}` | Visitor's email (empty if not given)   |
| `{{service}}`        | Service selected in the form           |
