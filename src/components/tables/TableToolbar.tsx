import React from 'react';
import { SearchBar } from '../ui/SearchBar';
import { Button } from '../ui/Button';
import { Download, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { DataRecord, OperationType, RecordStatus } from '../../types/records';

export interface TableToolbarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusFilterChange: (status: string) => void;
  operationFilter: string;
  onOperationFilterChange: (op: string) => void;
  pageSize: number;
  onPageSizeChange: (size: number) => void;
  onExport: () => void;
  onReset: () => void;
  hasFilters: boolean;
  totalFiltered: number;
}

export const TableToolbar: React.FC<TableToolbarProps> = ({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  operationFilter,
  onOperationFilterChange,
  pageSize,
  onPageSizeChange,
  onExport,
  onReset,
  hasFilters,
  totalFiltered,
}) => {
  return (
    <div
      data-tour="table-toolbar"
      className="p-4 bg-white rounded-t-xl border border-b-0 border-slate-200/90 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3"
    >
      {/* Search Input */}
      <div className="flex-1 max-w-md">
        <SearchBar
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Buscar por código, entidad, responsable..."
          resultsCount={totalFiltered}
        />
      </div>

      {/* Filters & Actions */}
      <div className="flex flex-wrap items-center gap-2.5">
        {/* Status Dropdown */}
        <select
          value={statusFilter}
          onChange={(e) => onStatusFilterChange(e.target.value)}
          aria-label="Filtrar por estado"
          className="text-xs bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900"
        >
          <option value="all">Todos los estados</option>
          <option value="Completado">Completado</option>
          <option value="En proceso">En proceso</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Observado">Observado</option>
          <option value="Cancelado">Cancelado</option>
        </select>

        {/* Operation Type Dropdown */}
        <select
          value={operationFilter}
          onChange={(e) => onOperationFilterChange(e.target.value)}
          aria-label="Filtrar por tipo de operación"
          className="text-xs bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 max-w-[170px] truncate"
        >
          <option value="all">Todas las operaciones</option>
          <option value="Transferencia Corporativa">Transferencia</option>
          <option value="Aprovisionamiento">Aprovisionamiento</option>
          <option value="Auditoría de Activos">Auditoría</option>
          <option value="Conciliación Bancaria">Conciliación</option>
          <option value="Despliegue de Seguridad">Seguridad</option>
          <option value="Emisión de Póliza">Póliza</option>
        </select>

        {/* Page Size Selector */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <span className="hidden sm:inline">Filas:</span>
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            aria-label="Registros por página"
            className="text-xs font-mono bg-slate-50 border border-slate-300 rounded-lg px-2 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>

        {hasFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
            title="Restablecer filtros"
          >
            Limpiar
          </Button>
        )}

        {/* Export Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onExport}
          leftIcon={<Download className="w-3.5 h-3.5" />}
          className="ml-auto lg:ml-0"
        >
          Exportar CSV
        </Button>
      </div>
    </div>
  );
};
