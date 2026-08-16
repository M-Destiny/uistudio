import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../utils/cn';

interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, children, className, disabled, ...props }, ref) => {
    const toggleId = `toggle-${Math.random().toString(36).slice(2, 9)}`;
    return (
      <label className="flex items-center gap-3 cursor-pointer">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            id={toggleId}
            className={cn(
              'peer absolute opacity-0 w-0 h-0 cursor-pointer',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              disabled && 'opacity-50',
              className,
            )}
            disabled={disabled}
            {...props}
          />
          <div
            className={cn(
              'relative w-10 h-6 rounded-full border-2 transition-colors',
              'bg-gray-300 dark:bg-gray-600 border-gray-300 dark:border-gray-500',
              'peer-checked:bg-blue-600 peer-checked:border-blue-600',
              'peer-disabled:opacity-50',
              'after:content-[""] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:rounded-full after:bg-white after:shadow after:transition-transform after:peer-checked:translate-x-5',
            )}
          />
        </div>
        {(label || children) && (
          <span className="text-sm text-gray-900 dark:text-gray-100">
            {label || children}
          </span>
        )}
      </label>
    );
  },
);
Toggle.displayName = 'Toggle';