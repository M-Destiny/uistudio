export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
export type Size = 'sm' | 'md' | 'lg';

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}
