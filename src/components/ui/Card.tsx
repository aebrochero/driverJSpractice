import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

export interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  isInteractive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  isInteractive = false,
  ...props
}) => {
  return (
    <motion.div
      whileHover={isInteractive ? { y: -2, transition: { duration: 0.15 } } : undefined}
      className={`bg-white rounded-xl border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${
        isInteractive ? 'hover:border-slate-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all cursor-pointer' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader: React.FC<{
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}> = ({ title, subtitle, action, className = '' }) => (
  <div className={`px-6 py-4 border-b border-slate-100 flex items-start justify-between gap-4 ${className}`}>
    <div>
      <h3 className="text-base font-semibold text-slate-900 tracking-tight">{title}</h3>
      {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </div>
);

export const CardContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

export const CardFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`px-6 py-3.5 bg-slate-50/70 border-t border-slate-100 rounded-b-xl flex items-center justify-between text-xs text-slate-500 ${className}`}>
    {children}
  </div>
);
