import React from 'react';

export interface FilterItem {
  id: string;
  label: string;
  count?: number;
}

export interface FilterBarProps {
  items: FilterItem[];
  selectedId: string;
  onSelect: (id: string) => void;
  className?: string;
  label?: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  items,
  selectedId,
  onSelect,
  className = '',
  label,
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      {label && (
        <span className="text-xs font-semibold text-slate-500 mr-1 shrink-0">
          {label}:
        </span>
      )}
      <div className="inline-flex flex-wrap items-center p-1 bg-slate-100/90 rounded-lg border border-slate-200/70">
        {items.map((item) => {
          const isActive = item.id === selectedId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                isActive
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
              }`}
            >
              <span>{item.label}</span>
              {typeof item.count === 'number' && (
                <span
                  className={`text-[10px] font-mono tabular-nums px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-slate-100 text-slate-700' : 'text-slate-500'
                  }`}
                >
                  {item.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
