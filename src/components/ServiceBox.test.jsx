import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ServiceBox from './ServiceBox';

describe('ServiceBox', () => {
  it('renders the service name, description and quote link', () => {
    render(
      <ServiceBox
        name="Carga plana"
        icon="truck-ramp-box"
        description="Plataforma abierta para carga de gran volumen."
      />
    );

    expect(
      screen.getByRole('heading', { name: /carga plana/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/plataforma abierta para carga/i)
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /cotizar/i })).toHaveAttribute(
      'href',
      '#contacto'
    );
  });
});
