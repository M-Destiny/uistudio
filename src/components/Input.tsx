import { forwardRef } from 'react';
import { cn } from '../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium">{label}</label>}
      <input
        ref={ref}
        className={cn(
          'w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500',
          error && 'border-red-500 focus:ring-red-500',
          className,
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  ),
);
Input.displayName = 'Input';
