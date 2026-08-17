import { cn } from '../utils/cn';
import type { ComponentProps } from '../types';

/**
 * Card component props.
 */
interface CardProps extends ComponentProps {}

/**
 * Card root container.
 *
 * @example
 * <Card>
 *   <CardHeader>Card Title</CardHeader>
 *   <CardContent>Card content goes here</CardContent>
 *   <CardFooter>Footer actions</CardFooter>
 * </Card>
 */
export function Card({ className, children }: CardProps) {
  return <div className={cn('rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm', className)}>{children}</div>;
}

/**
 * Card header section.
 *
 * @example
 * <CardHeader>Card Title</CardHeader>
 */
export function CardHeader({ className, children }: ComponentProps) {
  return <div className={cn('px-5 py-4 border-b border-gray-100 dark:border-gray-700', className)}>{children}</div>;
}

/**
 * Card content section.
 *
 * @example
 * <CardContent>Card content goes here</CardContent>
 */
export function CardContent({ className, children }: ComponentProps) {
  return <div className={cn('px-5 py-4', className)}>{children}</div>;
}

/**
 * Card footer section.
 *
 * @example
 * <CardFooter>Footer actions</CardFooter>
 */
export function CardFooter({ className, children }: ComponentProps) {
  return <div className={cn('px-5 py-3 border-t border-gray-100 dark:border-gray-700', className)}>{children}</div>;
}
