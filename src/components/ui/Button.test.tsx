import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renderiza Button com variant primary', () => {
  render(<Button variant="primary">Enviar</Button>);
  const button = screen.getByRole('button', { name: /enviar/i });
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('bg-amber-500');
});
