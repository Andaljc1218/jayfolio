import type { ReactNode } from 'react';

export type BadgeVariant = 'default' | 'outline' | 'ghost';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  icon?: ReactNode;
}

const variantClasses = {
  default: 'bg-[var(--theme-surface-elevated)] text-[var(--theme-text)] border border-[var(--theme-border)]',
  outline: 'border border-[var(--theme-border)] text-[var(--theme-text-secondary)]',
  ghost: 'text-[var(--theme-text-secondary)]',
};

export const Badge = ({
  className,
  variant = 'default',
  icon,
  children,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full transition-colors',
        variantClasses[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </span>
  );
};

Badge.displayName = 'Badge';
