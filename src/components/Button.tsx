import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '../utils/cn';
import type { Variant, Size, ComponentProps } from '../types';

const variants: Record<Variant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100',
  outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600',
  ghost: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300',
  destructive: 'bg-red-600 text-white hover:bg-red-700',
};

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

/**
 * Button component props.
 */
interface ButtonProps extends ComponentProps, ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant. Defaults to 'primary'. */
  variant?: Variant;
  /** Button size. Defaults to 'md'. */
  size?: Size;
  /** Disable interaction. Defaults to false. */
  disabled?: boolean;
}

/**
 * A versatile button component with multiple variants and sizes.
 *
 * @example
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="secondary">Secondary</Button>
 * <Button variant="outline">Outline</Button>
 * <Button variant="ghost">Ghost</Button>
 * <Button variant="destructive">Delete</Button>
 * <Button size="sm">Small</Button>
 * <Button size="lg">Large</Button>
 * <Button disabled>Disabled</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', disabled, className, children, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  ),
);
Button.displayName = 'Button';
