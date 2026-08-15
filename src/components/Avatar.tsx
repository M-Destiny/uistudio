import { cn } from '../utils/cn';

interface AvatarProps { src?: string; name: string; size?: 'sm' | 'md' | 'lg'; className?: string; }
const sizeMap = { sm: 'w-8 h-8 text-xs', md: 'w-10 h-10 text-sm', lg: 'w-14 h-14 text-base' };

export function Avatar({ src, name, size = 'md', className }: AvatarProps) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  if (src) return <img src={src} alt={name} className={cn('rounded-full object-cover', sizeMap[size], className)} />;
  return <div className={cn('rounded-full bg-blue-500 text-white flex items-center justify-center font-bold', sizeMap[size], className)}>{initials}</div>;
}
