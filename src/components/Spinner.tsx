import { cn } from '../utils/cn';

export type SpinnerSize = 'sm' | 'md' | 'lg';
export type SpinnerColor = 'primary' | 'white' | 'gray';

interface SpinnerProps {
  /** Visual size of the spinner. Defaults to `md`. */
  size?: SpinnerSize;
  /** Color of the spinner arc. Use `white` on dark backgrounds. Defaults to `primary`. */
  color?: SpinnerColor;
  /** Accessible label announced to screen readers. Defaults to `Loading`. */
  label?: string;
  /** Additional utility classes merged via `tailwind-merge`. */
  className?: string;
}

const sizeMap: Record<SpinnerSize, string> = {
  sm: 'w-4 h-4 border-2',
  md: 'w-6 h-6 border-2',
  lg: 'w-8 h-8 border-3',
};

const colorMap: Record<SpinnerColor, string> = {
  primary: 'border-gray-300 border-t-blue-500',
  white: 'border-white/30 border-t-white',
  gray: 'border-gray-200 border-t-gray-500',
};

/**
 * Accessible loading indicator.
 *
 * Renders a spinning circle with `role="status"` so screen readers announce it.
 * Pass a custom `label` for screen-reader context (e.g. "Loading users").
 *
 * @example
 * <Spinner />
 * <Spinner size="lg" color="white" label="Saving…" />
 */
export function Spinner({
  size = 'md',
  color = 'primary',
  label = 'Loading',
  className,
}: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn(
        'rounded-full animate-spin',
        sizeMap[size],
        colorMap[color],
        className,
      )}
    />
  );
}