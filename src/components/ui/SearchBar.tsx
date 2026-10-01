import React from 'react';
import { Search, X } from 'lucide-react';

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  onClear?: () => void;
  resultsCount?: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Buscar...',
  className = '',
  onClear,
  resultsCount,
}) => {
  return (
    <div className={`relative flex items-center w-full ${className}`}>
      <div className="absolute left-3 pointer-events-none text-slate-400 flex items-center justify-center">
        <Search className="w-4 h-4" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full text-sm bg-white border border-slate-300 rounded-lg pl-9 pr-24 py-2 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-colors shadow-xs"
      />
      <div className="absolute right-3 flex items-center gap-2">
        {typeof resultsCount === 'number' && value && (
          <span className="text-[11px] font-mono tabular-nums text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
            {resultsCount} {resultsCount === 1 ? 'resultado' : 'resultados'}
          </span>
        )}
        {value && (
          <button
            type="button"
            onClick={() => {
              onChange('');
              onClear?.();
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded transition-colors"
            title="Limpiar búsqueda"
            aria-label="Limpiar búsqueda"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
