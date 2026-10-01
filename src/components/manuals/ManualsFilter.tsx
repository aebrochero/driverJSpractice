import React from 'react';
import { SearchBar } from '../ui/SearchBar';
import { FilterBar } from '../ui/FilterBar';
import { ManualCategory, ManualStatus } from '../../types/manuals';
import { Filter, RotateCcw } from 'lucide-react';
import { Button } from '../ui/Button';

export interface ManualsFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  onResetFilters: () => void;
  hasActiveFilters: boolean;
  totalFiltered: number;
}

export const ManualsFilter: React.FC<ManualsFilterProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedStatus,
  onStatusChange,
  onResetFilters,
  hasActiveFilters,
  totalFiltered,
}) => {
  const categoryFilters = [
    { id: 'all', label: 'Todas las categorías' },
    { id: 'Seguridad y Cumplimiento', label: 'Seguridad' },
    { id: 'Operaciones', label: 'Operaciones' },
    { id: 'Finanzas y Auditoría', label: 'Finanzas' },
    { id: 'Tecnología e Infraestructura', label: 'Tecnología' },
    { id: 'Recursos Humanos', label: 'RRHH' },
  ];

  const statusFilters = [
    { id: 'all', label: 'Todos los estados' },
    { id: 'Vigente', label: 'Vigente' },
    { id: 'Actualizado', label: 'Actualizado' },
    { id: 'En revisión', label: 'En revisión' },
  ];

  return (
    <div className="space-y-4 mb-6" data-tour="manuals-filters">
      {/* Prominent Search Bar */}
      <div data-tour="manuals-search" className="flex flex-col sm:flex-row items-center gap-3">
        <SearchBar
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Buscar por código, título, palabra clave o departamento..."
          resultsCount={totalFiltered}
        />
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onResetFilters}
            leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
            className="whitespace-nowrap shrink-0 text-slate-600"
          >
            Limpiar filtros
          </Button>
        )}
      </div>

      {/* Filter Segmented Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pt-2">
        <FilterBar
          items={categoryFilters}
          selectedId={selectedCategory}
          onSelect={onCategoryChange}
          label="Categoría"
        />

        <div className="flex items-center gap-2">
          <FilterBar
            items={statusFilters}
            selectedId={selectedStatus}
            onSelect={onStatusChange}
            label="Estado"
          />
        </div>
      </div>
    </div>
  );
};
