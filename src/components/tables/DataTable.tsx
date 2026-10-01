import React from 'react';
import { DataRecord, SortField, SortDirection } from '../../types/records';
import { Badge } from '../ui/Badge';
import { ArrowUpDown, ArrowUp, ArrowDown, Eye, MoreHorizontal } from 'lucide-react';

export interface DataTableProps {
  records: DataRecord[];
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
  onSelectRecord: (record: DataRecord) => void;
}

export const DataTable: React.FC<DataTableProps> = ({
  records,
  sortField,
  sortDirection,
  onSort,
  onSelectRecord,
}) => {
  const getStatusVariant = (status: DataRecord['status']) => {
    switch (status) {
      case 'Completado':
        return 'success';
      case 'En proceso':
        return 'info';
      case 'Pendiente':
        return 'warning';
      case 'Observado':
        return 'error';
      case 'Cancelado':
        return 'neutral';
      default:
        return 'neutral';
    }
  };

  const renderSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 opacity-60" />;
    }
    return sortDirection === 'asc' ? (
      <ArrowUp className="w-3.5 h-3.5 text-slate-900" />
    ) : (
      <ArrowDown className="w-3.5 h-3.5 text-slate-900" />
    );
  };

  return (
    <div
      data-tour="table-data"
      className="hidden md:block w-full overflow-x-auto border border-slate-200/90 bg-white"
    >
      <table className="w-full text-left border-collapse text-xs">
        <thead>
          <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-semibold select-none">
            <th
              scope="col"
              onClick={() => onSort('code')}
              className="py-3 px-4 cursor-pointer hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              <div className="flex items-center gap-1.5">
                <span>Código</span>
                {renderSortIcon('code')}
              </div>
            </th>

            <th
              scope="col"
              onClick={() => onSort('entityName')}
              className="py-3 px-4 cursor-pointer hover:bg-slate-100 transition-colors"
            >
              <div className="flex items-center gap-1.5">
                <span>Entidad / Contraparte</span>
                {renderSortIcon('entityName')}
              </div>
            </th>

            <th
              scope="col"
              onClick={() => onSort('operationType')}
              className="py-3 px-4 cursor-pointer hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              <div className="flex items-center gap-1.5">
                <span>Operación</span>
                {renderSortIcon('operationType')}
              </div>
            </th>

            <th
              scope="col"
              onClick={() => onSort('date')}
              className="py-3 px-4 cursor-pointer hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              <div className="flex items-center gap-1.5">
                <span>Fecha</span>
                {renderSortIcon('date')}
              </div>
            </th>

            <th
              scope="col"
              onClick={() => onSort('amount')}
              className="py-3 px-4 cursor-pointer hover:bg-slate-100 transition-colors text-right whitespace-nowrap"
            >
              <div className="flex items-center justify-end gap-1.5">
                <span>Monto (USD)</span>
                {renderSortIcon('amount')}
              </div>
            </th>

            <th
              scope="col"
              onClick={() => onSort('status')}
              className="py-3 px-4 cursor-pointer hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              <div className="flex items-center gap-1.5">
                <span>Estado</span>
                {renderSortIcon('status')}
              </div>
            </th>

            <th scope="col" className="py-3 px-4 text-right whitespace-nowrap">
              <span>Acción</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {records.map((record) => (
            <tr
              key={record.id}
              className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
              onClick={() => onSelectRecord(record)}
            >
              {/* Code */}
              <td className="py-3.5 px-4 font-mono font-medium text-slate-900 whitespace-nowrap">
                {record.code}
              </td>

              {/* Entity */}
              <td className="py-3.5 px-4 font-medium text-slate-800 max-w-[220px] truncate">
                <span title={record.entityName}>{record.entityName}</span>
                <span className="block text-[11px] text-slate-400 font-normal">
                  {record.responsible}
                </span>
              </td>

              {/* Operation */}
              <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">
                {record.operationType}
              </td>

              {/* Date */}
              <td className="py-3.5 px-4 font-mono text-slate-500 whitespace-nowrap">
                {record.date}
              </td>

              {/* Amount - aligned right, tabular nums */}
              <td className="py-3.5 px-4 font-mono font-semibold tabular-nums text-slate-900 text-right whitespace-nowrap">
                ${record.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>

              {/* Status */}
              <td className="py-3.5 px-4 whitespace-nowrap">
                <Badge variant={getStatusVariant(record.status)} size="sm" showDot>
                  {record.status}
                </Badge>
              </td>

              {/* Action Button */}
              <td className="py-3.5 px-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  onClick={() => onSelectRecord(record)}
                  className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors inline-flex items-center gap-1 text-xs font-medium"
                  title="Ver detalle de transacción"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="sr-only sm:not-sr-only">Detalle</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
