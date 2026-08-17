import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders with label', () => {
    render(<Textarea label="Message" placeholder="Enter your message" />);
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('renders without label', () => {
    render(<Textarea placeholder="Enter text" />);
    expect(screen.getByPlaceholderText(/enter text/i)).toBeInTheDocument();
  });

  it('shows error message', () => {
    render(<Textarea label="Bio" error="Too long" />);
    expect(screen.getByText(/too long/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/bio/i)).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows hint text', () => {
    render(<Textarea label="Bio" hint="Max 500 characters" />);
    expect(screen.getByText(/max 500 characters/i)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Textarea className="custom-class" placeholder="Enter text" />);
    expect(screen.getByPlaceholderText(/enter text/i)).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Textarea ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLTextAreaElement));
  });

  it('passes native textarea props', () => {
    render(<Textarea disabled required maxLength={100} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDisabled();
    expect(textarea).toBeRequired();
    expect(textarea).toHaveAttribute('maxlength', '100');
  });

  it('calls onChange handler', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Textarea onChange={handleChange} />);
    await user.type(screen.getByRole('textbox'), 'test');
    expect(handleChange).toHaveBeenCalled();
  });
});