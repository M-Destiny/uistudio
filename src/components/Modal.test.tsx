import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  it('renders nothing when closed', () => {
    render(<Modal open={false} onClose={() => {}}>Content</Modal>);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('renders when open', () => {
    render(<Modal open={true} onClose={() => {}} title="Test Modal">Modal content</Modal>);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(<Modal open={true} onClose={() => {}} title="Confirm Delete">Content</Modal>);
    expect(screen.getByText('Confirm Delete')).toBeInTheDocument();
  });

  it('calls onClose when clicking backdrop', () => {
    const handleClose = vi.fn();
    render(<Modal open={true} onClose={handleClose}>Content</Modal>);
    fireEvent.click(screen.getByTestId('modal-backdrop'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when pressing Escape', () => {
    const handleClose = vi.fn();
    render(<Modal open={true} onClose={handleClose}>Content</Modal>);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when clicking close button', () => {
    const handleClose = vi.fn();
    render(<Modal open={true} onClose={handleClose} title="Test">Content</Modal>);
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<Modal open={true} onClose={() => {}} className="custom-modal">Content</Modal>);
    expect(screen.getByRole('dialog')).toHaveClass('custom-modal');
  });
});