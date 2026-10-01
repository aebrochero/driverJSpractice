import React from 'react';

export type BadgeVariant = 'neutral' | 'success' | 'warning' | 'error' | 'info';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  showDot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  showDot = false,
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  const variantStyles: Record<BadgeVariant, { container: string; dot: string }> = {
    neutral: {
      container: 'bg-slate-100 text-slate-700 border border-slate-200',
      dot: 'bg-slate-500',
    },
    success: {
      container: 'bg-emerald-50 text-emerald-800 border border-emerald-200/80',
      dot: 'bg-emerald-600',
    },
    warning: {
      container: 'bg-amber-50 text-amber-800 border border-amber-200/80',
      dot: 'bg-amber-600',
    },
    error: {
      container: 'bg-rose-50 text-rose-800 border border-rose-200/80',
      dot: 'bg-rose-600',
    },
    info: {
      container: 'bg-sky-50 text-sky-800 border border-sky-200/80',
      dot: 'bg-sky-600',
    },
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-md tracking-tight ${sizeStyles[size]} ${variantStyles[variant].container} ${className}`}
    >
      {showDot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${variantStyles[variant].dot}`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
};
