import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders the main heading and every section', () => {
    expect(
      screen.getByRole('heading', { level: 1, name: /movemos tu carga/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /logística que se mueve/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /servicios de transporte/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /rutas de traslado/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /cotiza tu próximo traslado/i })
    ).toBeInTheDocument();
  });

  it('has an anchor target for each section', () => {
    ['inicio', 'nosotros', 'servicios', 'rutas', 'contacto'].forEach((id) => {
      expect(document.querySelector(`#${id}`)).toBeInTheDocument();
    });
  });

  it('links the main navigation to every section', () => {
    const nav = screen.getByRole('navigation', {
      name: /navegación principal/i,
    });

    expect(within(nav).getByRole('link', { name: /^inicio$/i })).toHaveAttribute(
      'href',
      '#inicio'
    );
    expect(
      within(nav).getByRole('link', { name: /^nosotros$/i })
    ).toHaveAttribute('href', '#nosotros');
    expect(
      within(nav).getByRole('link', { name: /^servicios$/i })
    ).toHaveAttribute('href', '#servicios');
    expect(within(nav).getByRole('link', { name: /^rutas$/i })).toHaveAttribute(
      'href',
      '#rutas'
    );
    expect(
      within(nav).getByRole('link', { name: /^cotizar traslado$/i })
    ).toHaveAttribute('href', '#contacto');
  });

  it('renders the footer with the company name', () => {
    expect(screen.getByText(/todos los derechos reservados/i)).toBeInTheDocument();
  });
});
