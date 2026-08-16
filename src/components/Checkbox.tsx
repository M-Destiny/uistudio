import { forwardRef, useId, InputHTMLAttributes } from 'react';
import { cn } from '../utils/cn';
import { Check } from 'lucide-react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'defaultChecked'> {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, disabled, checked, defaultChecked, ...props }, ref) => {
    const checkboxId = useId();
    const isControlled = checked !== undefined;
    return (
      <label className="flex items-center gap-2 cursor-pointer">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            checked={isControlled ? checked : undefined}
            defaultChecked={defaultChecked}
            className={cn(
              'peer absolute opacity-0 w-4 h-4 cursor-pointer',
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
              'w-4 h-4 border-2 rounded border-gray-300 dark:border-gray-600',
              'flex items-center justify-center',
              'peer-checked:bg-blue-600 peer-checked:border-blue-600',
              'peer-disabled:opacity-50',
            )}
          >
            <Check className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" />
          </div>
        </div>
        {label && (
          <span className="text-sm text-gray-900 dark:text-gray-100">{label}</span>
        )}
      </label>
    );
  },
);
Checkbox.displayName = 'Checkbox';