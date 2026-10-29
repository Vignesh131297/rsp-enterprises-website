import { afterEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );

describe('pages', () => {
  it.each([
    ['/', /Excavation, rock breaking/i],
    ['/about', /25 years of moving earth/i],
    ['/services', /Everything your site needs/i],
    ['/projects', /Work on the ground/i],
    ['/contact', /Tell us about your site/i],
  ])('%s renders its hero heading', (path, heading) => {
    renderAt(path);
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
  });

  it('highlights the current page in the menu and shows the enquiries email', () => {
    renderAt('/services');
    expect(screen.getByRole('link', { name: 'Services', current: 'page' })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'pm@rspenterprises.net' }).length).toBeGreaterThan(0);
    expect(screen.queryByText('sales@rspenterprises.net')).not.toBeInTheDocument();
  });

  it('has a single header link to the contact page (Get a Quote)', () => {
    renderAt('/');
    const menu = screen.getByRole('navigation', { name: 'Main' });
    const contactLinks = within(menu)
      .getAllByRole('link')
      .filter((a) => a.getAttribute('href') === '/contact');
    expect(contactLinks).toHaveLength(1);
    expect(contactLinks[0]).toHaveTextContent('Get a Quote');
  });

  it('shows a not-found page for unknown links', () => {
    renderAt('/nope');
    expect(screen.getByRole('heading', { name: /couldn.t find that page/i })).toBeInTheDocument();
  });
});

describe('home features', () => {
  it('breaks the rock after three hits and resets', async () => {
    const user = userEvent.setup();
    renderAt('/');
    const rock = screen.getByRole('button', { name: 'Hit the boulder with the breaker' });
    await user.click(rock);
    expect(screen.getByText('Hit 1 of 3 – cracks are forming')).toBeInTheDocument();
    await user.click(rock);
    await user.click(rock);
    expect(screen.getByText('Rock broken. Yours is next.')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Break another' }));
    expect(screen.getByText('Tap the boulder to start breaking')).toBeInTheDocument();
  });

  it('updates the basement estimate and the WhatsApp link', async () => {
    const user = userEvent.setup();
    renderAt('/');
    fireEvent.change(screen.getByLabelText('Plot area'), { target: { value: '12000' } });
    await user.click(screen.getByRole('button', { name: '3 levels' }));
    await user.click(screen.getByRole('button', { name: 'Hard rock' }));
    expect(screen.getByTestId('plan-volume')).toHaveTextContent('12,820 m³');
    expect(screen.getByTestId('plan-days')).toHaveTextContent('48 days');
    expect(screen.getByText(/Shoring advised/)).toBeInTheDocument();
    const href = decodeURIComponent(
      screen.getByRole('link', { name: 'Get an exact quote on WhatsApp' }).getAttribute('href'),
    );
    expect(href).toContain('Plot area: 12,000 sq ft');
    expect(href).toContain('Ground: Hard rock');
  });
});

describe('projects features', () => {
  it('filters projects by status', async () => {
    const user = userEvent.setup();
    renderAt('/projects');
    expect(screen.getAllByRole('article')).toHaveLength(15);
    await user.click(screen.getByRole('button', { name: 'Ongoing (4)' }));
    expect(screen.getAllByRole('article')).toHaveLength(4);
    await user.click(screen.getByRole('button', { name: 'Completed (11)' }));
    expect(screen.getAllByRole('article')).toHaveLength(11);
  });

  it('lists a city’s projects when its map pin is tapped', async () => {
    const user = userEvent.setup();
    renderAt('/projects');
    await user.click(screen.getByRole('button', { name: 'Hosur, 2 projects' }));
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);
    expect(within(items[0]).getByText('Hical Technologies')).toBeInTheDocument();
    expect(within(items[1]).getByText('Ascent Circuits')).toBeInTheDocument();
  });

  it('moves the rock-to-ready slider', () => {
    renderAt('/projects');
    const slider = screen.getByLabelText('Slide between rock breaking and hauling');
    fireEvent.change(slider, { target: { value: '20' } });
    expect(slider.parentElement.querySelector('.ba-handle')).toHaveStyle({ left: '20%' });
  });
});

describe('services and contact', () => {
  it('shows all five machine types on the fleet board', () => {
    renderAt('/services');
    expect(screen.getAllByText('Ask for this week')).toHaveLength(5);
  });
});

describe('enquiry form: email and WhatsApp', () => {
  const EXPECTED = [
    'Hi RSP, I have an enquiry from your website.',
    'Name: Ramesh Kumar',
    'Company: ABC Builders',
    'Phone / WhatsApp: 98450 12345',
    'Email: ramesh@abcbuilders.com',
    'Service needed: Excavation & rock breaking',
    'Site location: Whitefield, Bangalore',
    'Project details: 2-level basement, approx. 8,000 sq ft plot',
  ].join('\n');

  const fillAndSend = async (user, { website } = {}) => {
    await user.type(screen.getByLabelText('Full name'), 'Ramesh Kumar');
    await user.type(screen.getByLabelText('Company'), 'ABC Builders');
    await user.type(screen.getByLabelText('Phone / WhatsApp'), '98450 12345');
    await user.type(screen.getByLabelText('Email'), 'ramesh@abcbuilders.com');
    await user.selectOptions(screen.getByLabelText('Service needed'), 'Excavation & rock breaking');
    await user.type(screen.getByLabelText('Site location'), 'Whitefield, Bangalore');
    await user.type(screen.getByLabelText('Project details'), '2-level basement, approx. 8,000 sq ft plot');
    if (website) fireEvent.change(document.getElementById('f-website'), { target: { value: website } });
    await user.click(screen.getByRole('button', { name: 'Send enquiry' }));
  };
  const whatsappText = (link) => new URL(link.getAttribute('href')).searchParams.get('text');

  const enableEmail = () => {
    vi.stubEnv('VITE_EMAILJS_SERVICE_ID', 'service_test');
    vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', 'template_test');
    vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', 'public_test');
  };

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it('without email set up, offers WhatsApp and email with the exact enquiry text', async () => {
    const user = userEvent.setup();
    renderAt('/contact');
    await fillAndSend(user);
    const whatsapp = await screen.findByRole('link', { name: 'Send on WhatsApp' });
    expect(whatsapp.getAttribute('href')).toMatch(/^https:\/\/wa\.me\/919901039765\?text=/);
    expect(whatsappText(whatsapp)).toBe(EXPECTED);
    const mail = new URL(screen.getByRole('link', { name: 'Or send it by email' }).getAttribute('href'));
    expect(mail.pathname).toBe('pm@rspenterprises.net');
    expect(mail.searchParams.get('body')).toBe(EXPECTED);
  });

  it('emails the exact enquiry text through EmailJS and confirms to the visitor', async () => {
    enableEmail();
    const fetchMock = vi.fn().mockResolvedValue(new Response('OK', { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);
    const user = userEvent.setup();
    renderAt('/contact');
    await fillAndSend(user);
    expect(await screen.findByText(/Your enquiry has been emailed to our team/)).toBeInTheDocument();
    const [url, request] = fetchMock.mock.calls[0];
    expect(url).toBe('https://api.emailjs.com/api/v1.0/email/send');
    const body = JSON.parse(request.body);
    expect(body).toMatchObject({ service_id: 'service_test', template_id: 'template_test', user_id: 'public_test' });
    expect(body.template_params.message).toBe(EXPECTED);
    expect(body.template_params.subject).toBe('Website enquiry – Excavation & rock breaking – Ramesh Kumar');
    expect(body.template_params.customer_email).toBe('ramesh@abcbuilders.com');
    expect(whatsappText(screen.getByRole('link', { name: 'Also send on WhatsApp' }))).toBe(EXPECTED);
    expect(screen.getByLabelText('Full name')).toHaveValue('');
  });

  it('falls back to WhatsApp and phone if the email service fails', async () => {
    enableEmail();
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('Bad request', { status: 400 })));
    const user = userEvent.setup();
    renderAt('/contact');
    await fillAndSend(user);
    expect(await screen.findByText(/couldn't send your enquiry by email/)).toBeInTheDocument();
    expect(whatsappText(screen.getByRole('link', { name: 'Send on WhatsApp' }))).toBe(EXPECTED);
    const notice = screen.getByRole('status');
    expect(within(notice).getByRole('link', { name: 'Call 99010 39765' })).toHaveAttribute('href', 'tel:+919901039765');
  });

  it('does not send anything when the hidden spam-trap field is filled', async () => {
    enableEmail();
    const fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    const user = userEvent.setup();
    renderAt('/contact');
    await fillAndSend(user, { website: 'spam.example' });
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
