import { cn } from '../utils/cn';

interface AvatarProps {
  /** Image URL for the avatar. */
  src?: string;
  /** Fallback name used to generate initials when no image is provided. */
  name: string;
  /** Avatar size. Defaults to 'md'. */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes. */
  className?: string;
}
const sizeMap = { sm: 'w-8 h-8 text-xs', md: 'w-10 h-10 text-sm', lg: 'w-14 h-14 text-base' };

/**
 * An avatar component with image support and fallback initials.
 *
 * @example
 * <Avatar name="John Doe" />
 * <Avatar name="Jane Smith" size="lg" />
 * <Avatar src="/avatar.png" name="User" />
 */
export function Avatar({ src, name, size = 'md', className }: AvatarProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  if (src) return <img src={src} alt={name} className={cn('rounded-full object-cover', sizeMap[size], className)} />;
  return <div className={cn('rounded-full bg-blue-500 text-white flex items-center justify-center font-bold', sizeMap[size], className)}>{initials}</div>;
}
