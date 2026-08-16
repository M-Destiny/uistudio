import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardContent, CardFooter } from './Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Card className="custom-card" />);
    expect(container.firstChild).toHaveClass('custom-card');
  });

  it('has base styles', () => {
    render(<Card>Content</Card>);
    const card = screen.getByText('Content').closest('div');
    expect(card).toHaveClass('rounded-xl');
    expect(card).toHaveClass('border');
    expect(card).toHaveClass('bg-white');
  });
});

describe('CardHeader', () => {
  it('renders children', () => {
    render(<CardHeader>Header Title</CardHeader>);
    expect(screen.getByText('Header Title')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<CardHeader className="custom-header" />);
    expect(container.firstChild).toHaveClass('custom-header');
  });

  it('has base styles', () => {
    render(<CardHeader>Header</CardHeader>);
    const header = screen.getByText('Header').closest('div');
    expect(header).toHaveClass('px-5');
    expect(header).toHaveClass('py-4');
    expect(header).toHaveClass('border-b');
  });
});

describe('CardContent', () => {
  it('renders children', () => {
    render(<CardContent>Content here</CardContent>);
    expect(screen.getByText('Content here')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<CardContent className="custom-content" />);
    expect(container.firstChild).toHaveClass('custom-content');
  });

  it('has base styles', () => {
    render(<CardContent>Content</CardContent>);
    const content = screen.getByText('Content').closest('div');
    expect(content).toHaveClass('px-5');
    expect(content).toHaveClass('py-4');
  });
});

describe('CardFooter', () => {
  it('renders children', () => {
    render(<CardFooter>Footer actions</CardFooter>);
    expect(screen.getByText('Footer actions')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<CardFooter className="custom-footer" />);
    expect(container.firstChild).toHaveClass('custom-footer');
  });

  it('has base styles', () => {
    render(<CardFooter>Footer</CardFooter>);
    const footer = screen.getByText('Footer').closest('div');
    expect(footer).toHaveClass('px-5');
    expect(footer).toHaveClass('py-3');
    expect(footer).toHaveClass('border-t');
  });
});

describe('Card composition', () => {
  it('renders complete card structure', () => {
    render(
      <Card>
        <CardHeader>Title</CardHeader>
        <CardContent>Body</CardContent>
        <CardFooter>Actions</CardFooter>
      </Card>
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });
});