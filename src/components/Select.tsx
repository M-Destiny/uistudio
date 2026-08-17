import { forwardRef, SelectHTMLAttributes, useId } from 'react';
import { cn } from '../utils/cn';

/**
 * Select component props.
 */
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** Label text displayed above the select. */
  label?: string;
  /** Error message displayed below the select. */
  error?: string;
  /** Hint text displayed below the select (hidden when error is present). */
  hint?: string;
}

/**
 * A styled select dropdown component with label, hint, and error state.
 *
 * @example
 * <Select label="Country" error="Required">
 *   <option value="">Select...</option>
 *   <option value="us">United States</option>
 *   <option value="uk">United Kingdom</option>
 * </Select>
 * <Select label="Theme" hint="Choose your preference">
 *   <option value="light">Light</option>
 *   <option value="dark">Dark</option>
 * </Select>
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, hint, id, className, children, ...props }, ref) => {
    const reactId = useId();
    const selectId = id ?? reactId;
    const errorId = `${selectId}-error`;
    const hintId = `${selectId}-hint`;

    const describedBy =
      [error && errorId, hint && hintId].filter(Boolean).join(' ') || undefined;

    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            'w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600',
            'focus:outline-none focus:ring-2 focus:ring-blue-500',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'border-red-500 focus:ring-red-500',
            className,
          )}
          {...props}
        >
          {children}
        </select>
        {hint && !error && (
          <p id={hintId} className="text-sm text-gray-500 dark:text-gray-400">
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);
Select.displayName = 'Select';
