import React from 'react';
import { DataRecord } from '../../types/records';
import { Badge } from '../ui/Badge';
import { ChevronRight } from 'lucide-react';

export interface DataCardListProps {
  records: DataRecord[];
  onSelectRecord: (record: DataRecord) => void;
}

export const DataCardList: React.FC<DataCardListProps> = ({
  records,
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

  return (
    <div className="block md:hidden divide-y divide-slate-100 bg-white border border-slate-200/90" data-tour="table-data-mobile">
      {records.map((record) => (
        <div
          key={record.id}
          onClick={() => onSelectRecord(record)}
          className="p-4 hover:bg-slate-50 transition-colors cursor-pointer"
        >
          {/* Top row: code, status, amount */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="font-mono text-xs font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
              {record.code}
            </span>
            <Badge variant={getStatusVariant(record.status)} size="sm" showDot>
              {record.status}
            </Badge>
          </div>

          {/* Entity Name */}
          <h4 className="text-sm font-semibold text-slate-900 leading-snug mb-1">
            {record.entityName}
          </h4>

          {/* Operation & Date */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>{record.operationType}</span>
            <span className="font-mono">{record.date}</span>
          </div>

          {/* Bottom row: amount & tap affordance */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="font-mono font-bold tabular-nums text-slate-900 text-sm">
              ${record.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })} {record.currency}
            </span>
            <span className="inline-flex items-center gap-1 text-slate-600 font-medium">
              <span>Ver detalle</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
