import { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../utils/cn';
import type { ComponentProps } from '../types';

/**
 * Modal component props.
 */
interface ModalProps extends ComponentProps {
  /** Whether the modal is visible. */
  open: boolean;
  /** Called when the modal should close (backdrop click or Escape key). */
  onClose: () => void;
  /** Optional title displayed in the modal header. */
  title?: string;
}

/**
 * An accessible modal dialog with backdrop, header, and close button.
 *
 * @example
 * <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Confirm">
 *   <p>Are you sure?</p>
 *   <Button onClick={() => setIsOpen(false)}>Confirm</Button>
 * </Modal>
 */
export function Modal({ open, onClose, title, children, className }: ModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (open) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} data-testid="modal-backdrop" />
      <div className={cn('relative z-10 w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-xl', className)} role="dialog" aria-modal="true">
        {title && (
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="font-semibold text-lg">{title}</h2>
            <button onClick={onClose} className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Close"><X size={18} /></button>
          </div>
        )}
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
