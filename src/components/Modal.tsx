import { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../utils/cn';
import type { ComponentProps } from '../types';

interface ModalProps extends ComponentProps {
  open: boolean;
  onClose: () => void;
  title?: string;
}

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (open) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className={cn('relative z-10 w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-xl', className)}>
        {title && (
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="font-semibold text-lg">{title}</h2>
            <button onClick={onClose} className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"><X size={18} /></button>
          </div>
        )}
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
