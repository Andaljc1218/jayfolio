'use client';

import { motion } from 'framer-motion';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonRadius = 'default' | 'full';

export interface ButtonProps {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  radius?: ButtonRadius;
  href?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
  ariaRequired?: boolean;
}

const variantClasses = {
  primary:
    'bg-[var(--theme-accent)] text-[var(--theme-bg)] hover:shadow-lg',
  secondary:
    'border border-[var(--theme-border)] text-[var(--theme-text)] hover:border-[var(--theme-accent)] hover:text-[var(--theme-accent)] hover:bg-[var(--theme-surface-elevated)]',
  ghost:
    'text-[var(--theme-text-secondary)] hover:text-[var(--theme-accent)] hover:bg-[var(--theme-surface-elevated)]',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const radiusClasses = {
  default: 'rounded-[var(--btn-radius)]',
  full: 'rounded-full',
};

export const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  radius = 'default',
  href,
  icon,
  children,
  onClick,
  type = 'button',
  disabled,
  ariaLabel,
  ariaRequired,
}: ButtonProps) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-medium transition-all disabled:pointer-events-none disabled:opacity-50';

  const allClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    radiusClasses[radius],
    className,
  ].join(' ');

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={allClasses}
        aria-label={ariaLabel}
        aria-required={ariaRequired}
      >
        {icon && <span className="flex items-center">{icon}</span>}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={allClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-required={ariaRequired}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </motion.button>
  );
};

Button.displayName = 'Button';
