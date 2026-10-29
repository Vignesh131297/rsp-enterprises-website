import { describe, expect, it, vi } from 'vitest';
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

  it('highlights the current page in the menu and shows the new contact email', () => {
    renderAt('/services');
    expect(screen.getByRole('link', { name: 'Services', current: 'page' })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: 'sales@rspenterprises.net' }).length).toBeGreaterThan(0);
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
    const href = decodeURIComponent(screen.getByRole('link', { name: 'Get an exact quote on WhatsApp' }).getAttribute('href'));
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

  it('sends the enquiry to WhatsApp with the form details', async () => {
    const user = userEvent.setup();
    const open = vi.spyOn(window, 'open').mockImplementation(() => null);
    renderAt('/contact');
    await user.type(screen.getByLabelText('Full name'), 'Test Visitor');
    await user.type(screen.getByLabelText('Phone / WhatsApp'), '9000000000');
    await user.type(screen.getByLabelText('Site location'), 'Whitefield');
    await user.click(screen.getByRole('button', { name: 'Send enquiry' }));
    const url = decodeURIComponent(open.mock.calls[0][0]);
    expect(url).toContain('https://wa.me/919901039765');
    expect(url).toContain('Name: Test Visitor');
    expect(url).toContain('Site location: Whitefield');
    expect(screen.getByRole('status')).toHaveTextContent('WhatsApp has opened');
    open.mockRestore();
  });
});
