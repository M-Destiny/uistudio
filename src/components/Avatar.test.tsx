import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders fallback initials when no src', () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders single initial for single name', () => {
    render(<Avatar name="John" />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('limits initials to 2 characters', () => {
    render(<Avatar name="John David Smith" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders image when src provided', () => {
    render(<Avatar src="/avatar.png" name="User" />);
    const img = screen.getByAltText('User');
    expect(img).toHaveAttribute('src', '/avatar.png');
    expect(img).toHaveClass('rounded-full');
    expect(img).toHaveClass('object-cover');
  });

  it('applies size classes - sm', () => {
    render(<Avatar name="John" size="sm" />);
    expect(screen.getByText('J')).toHaveClass('w-8');
    expect(screen.getByText('J')).toHaveClass('h-8');
    expect(screen.getByText('J')).toHaveClass('text-xs');
  });

  it('applies size classes - md', () => {
    render(<Avatar name="John" size="md" />);
    expect(screen.getByText('J')).toHaveClass('w-10');
    expect(screen.getByText('J')).toHaveClass('h-10');
    expect(screen.getByText('J')).toHaveClass('text-sm');
  });

  it('applies size classes - lg', () => {
    render(<Avatar name="John" size="lg" />);
    expect(screen.getByText('J')).toHaveClass('w-14');
    expect(screen.getByText('J')).toHaveClass('h-14');
    expect(screen.getByText('J')).toHaveClass('text-base');
  });

  it('applies custom className', () => {
    render(<Avatar name="John" className="custom-avatar" />);
    expect(screen.getByText('J')).toHaveClass('custom-avatar');
  });

  it('applies blue background to fallback', () => {
    render(<Avatar name="John" />);
    expect(screen.getByText('J')).toHaveClass('bg-blue-500');
    expect(screen.getByText('J')).toHaveClass('text-white');
    expect(screen.getByText('J')).toHaveClass('flex');
    expect(screen.getByText('J')).toHaveClass('items-center');
    expect(screen.getByText('J')).toHaveClass('justify-center');
    expect(screen.getByText('J')).toHaveClass('font-bold');
  });
});