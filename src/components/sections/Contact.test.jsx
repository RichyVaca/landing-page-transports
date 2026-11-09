import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact', () => {
  it('renders the contact methods without a quote form', () => {
    render(<Contact />);

    expect(
      screen.getByRole('heading', { name: /cotiza tu próximo traslado/i })
    ).toBeInTheDocument();

    const phoneLink = screen.getByRole('link', { name: /\+52/i });
    expect(phoneLink.getAttribute('href')).toMatch(/^tel:/);

    const emailLink = screen.getByRole('link', { name: /@/i });
    expect(emailLink.getAttribute('href')).toMatch(/^mailto:/);

    expect(
      screen.getByRole('link', { name: /escríbenos por whatsapp/i })
    ).toHaveAttribute('href', 'https://wa.me/523300000000');

    expect(screen.getByText(/colima, colima/i)).toBeInTheDocument();
    expect(screen.getByText(/lun a vie/i)).toBeInTheDocument();

    expect(screen.queryByRole('form')).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/nombre completo/i)).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /enviar solicitud/i })
    ).not.toBeInTheDocument();
  });
});
