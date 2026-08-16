import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders children correctly', () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText('Default')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText('Default')).toHaveClass('bg-gray-100');
    expect(screen.getByText('Default')).toHaveClass('text-gray-700');
  });

  it('applies blue variant classes', () => {
    render(<Badge variant="blue">Info</Badge>);
    expect(screen.getByText('Info')).toHaveClass('bg-blue-100');
    expect(screen.getByText('Info')).toHaveClass('text-blue-700');
  });

  it('applies green variant classes', () => {
    render(<Badge variant="green">Success</Badge>);
    expect(screen.getByText('Success')).toHaveClass('bg-green-100');
    expect(screen.getByText('Success')).toHaveClass('text-green-700');
  });

  it('applies red variant classes', () => {
    render(<Badge variant="red">Error</Badge>);
    expect(screen.getByText('Error')).toHaveClass('bg-red-100');
    expect(screen.getByText('Error')).toHaveClass('text-red-700');
  });

  it('applies yellow variant classes', () => {
    render(<Badge variant="yellow">Warning</Badge>);
    expect(screen.getByText('Warning')).toHaveClass('bg-yellow-100');
    expect(screen.getByText('Warning')).toHaveClass('text-yellow-700');
  });

  it('applies custom className', () => {
    render(<Badge className="custom-badge">Custom</Badge>);
    expect(screen.getByText('Custom')).toHaveClass('custom-badge');
  });

  it('renders as inline-block with rounded-full', () => {
    render(<Badge>Test</Badge>);
    expect(screen.getByText('Test')).toHaveClass('inline-block');
    expect(screen.getByText('Test')).toHaveClass('rounded-full');
    expect(screen.getByText('Test')).toHaveClass('px-2');
    expect(screen.getByText('Test')).toHaveClass('py-0.5');
    expect(screen.getByText('Test')).toHaveClass('text-xs');
    expect(screen.getByText('Test')).toHaveClass('font-medium');
  });
});