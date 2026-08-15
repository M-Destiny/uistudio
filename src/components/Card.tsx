import { cn } from '../utils/cn';
import type { ComponentProps } from '../types';

export function Card({ className, children }: ComponentProps) {
  return <div className={cn('rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm', className)}>{children}</div>;
}
export function CardHeader({ className, children }: ComponentProps) {
  return <div className={cn('px-5 py-4 border-b border-gray-100 dark:border-gray-700', className)}>{children}</div>;
}
export function CardContent({ className, children }: ComponentProps) {
  return <div className={cn('px-5 py-4', className)}>{children}</div>;
}
export function CardFooter({ className, children }: ComponentProps) {
  return <div className={cn('px-5 py-3 border-t border-gray-100 dark:border-gray-700', className)}>{children}</div>;
}
