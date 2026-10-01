import React from 'react';

export interface AvatarProps {
  name: string;
  role?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'active' | 'inactive';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  name,
  size = 'md',
  status,
  className = '',
}) => {
  const getInitials = (str: string) => {
    const parts = str.trim().split(/\s+/);
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return (str.slice(0, 2) || 'US').toUpperCase();
  };

  const sizeClasses = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-base font-semibold',
    xl: 'w-20 h-20 text-xl font-bold',
  };

  const statusClasses = {
    xs: 'w-1.5 h-1.5 bottom-0 right-0',
    sm: 'w-2 h-2 bottom-0 right-0',
    md: 'w-2.5 h-2.5 bottom-0.5 right-0.5',
    lg: 'w-3.5 h-3.5 bottom-1 right-1',
    xl: 'w-4 h-4 bottom-1.5 right-1.5',
  };

  return (
    <div className={`relative inline-flex shrink-0 ${className}`}>
      <div
        className={`${sizeClasses[size]} rounded-lg bg-gradient-to-br from-slate-800 to-slate-950 text-slate-100 flex items-center justify-center font-medium shadow-xs border border-slate-700/40 select-none tracking-tight`}
      >
        <span>{getInitials(name)}</span>
      </div>
      {status && (
        <span
          className={`absolute rounded-full border-2 border-white ${
            status === 'active' ? 'bg-emerald-500' : 'bg-slate-400'
          } ${statusClasses[size]}`}
          title={status === 'active' ? 'Estado activo' : 'Inactivo'}
        />
      )}
    </div>
  );
};
