import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders with default size and color', () => {
    render(<Spinner />);
    const el = screen.getByRole('status');
    expect(el).toHaveClass('w-6 h-6 border-2');
    expect(el).toHaveClass('border-t-blue-500');
    expect(el).toHaveAttribute('aria-label', 'Loading');
  });

  it('renders with sm size', () => {
    render(<Spinner size="sm" />);
    expect(screen.getByRole('status')).toHaveClass('w-4 h-4 border-2');
  });

  it('renders with lg size', () => {
    render(<Spinner size="lg" />);
    expect(screen.getByRole('status')).toHaveClass('w-8 h-8 border-3');
  });

  it('renders with white color for dark backgrounds', () => {
    render(<Spinner color="white" />);
    expect(screen.getByRole('status')).toHaveClass('border-t-white');
  });

  it('renders with gray color', () => {
    render(<Spinner color="gray" />);
    expect(screen.getByRole('status')).toHaveClass('border-t-gray-500');
  });

  it('overrides the accessible label', () => {
    render(<Spinner label="Loading users" />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading users');
  });

  it('applies custom className', () => {
    render(<Spinner className="custom-spinner" />);
    expect(screen.getByRole('status')).toHaveClass('custom-spinner');
  });
});