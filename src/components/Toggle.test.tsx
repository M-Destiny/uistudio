import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('renders correctly', () => {
    render(<Toggle>Toggle me</Toggle>);
    expect(screen.getByRole('checkbox', { name: /toggle me/i })).toBeInTheDocument();
  });

  it('renders without label', () => {
    render(<Toggle />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('handles checked state', () => {
    const { rerender } = render(<Toggle checked={true} />);
    expect(screen.getByRole('checkbox')).toBeChecked();

    rerender(<Toggle checked={false} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('handles disabled state', () => {
    render(<Toggle disabled>Disabled</Toggle>);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeDisabled();
  });

  it('calls onChange handler', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Toggle onChange={handleChange} />);
    await user.click(screen.getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('does not call onChange when disabled', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Toggle disabled onChange={handleChange} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    await user.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Toggle ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });
});