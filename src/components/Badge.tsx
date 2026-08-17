import { cn } from '../utils/cn';

const variants: Record<string, string> = {
  default: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  green: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  red: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  yellow: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
};

/**
 * Badge component props.
 */
interface BadgeProps {
  /** Color variant. Defaults to 'default'. */
  variant?: keyof typeof variants;
  /** Badge content. */
  children: React.ReactNode;
  /** Additional CSS classes. */
  className?: string;
}

/**
 * A status/category badge component with multiple color variants.
 *
 * @example
 * <Badge variant="default">Default</Badge>
 * <Badge variant="blue">Info</Badge>
 * <Badge variant="green">Success</Badge>
 * <Badge variant="red">Error</Badge>
 * <Badge variant="yellow">Warning</Badge>
 */
export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return <span className={cn('inline-block px-2 py-0.5 rounded-full text-xs font-medium', variants[variant], className)}>{children}</span>;
}
