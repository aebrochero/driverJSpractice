import React from 'react';
import { DataRecord } from '../../types/records';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Building2, Calendar, DollarSign, User, FileText, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export interface RecordDetailModalProps {
  record: DataRecord | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RecordDetailModal: React.FC<RecordDetailModalProps> = ({
  record,
  isOpen,
  onClose,
}) => {
  const { showToast } = useAuth();

  if (!record) return null;

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

  const handleCopyId = () => {
    navigator.clipboard.writeText(record.code);
    showToast({
      type: 'info',
      title: 'Código copiado',
      message: `El código ${record.code} fue copiado al portapapeles.`
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Ficha Transaccional ${record.code}`}
      subtitle={`Entidad vinculada: ${record.entityName}`}
      maxWidth="lg"
      footer={
        <>
          <Button variant="outline" size="sm" onClick={handleCopyId}>
            Copiar código
          </Button>
          <Button variant="primary" size="sm" onClick={onClose}>
            Entendido
          </Button>
        </>
      }
    >
      <div className="space-y-5">
        {/* Header summary box */}
        <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 block mb-0.5">Monto de la Operación</span>
            <span className="text-xl font-bold font-mono tabular-nums text-slate-900">
              ${record.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })} {record.currency}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-500 block mb-1">Estado de Auditoría</span>
            <Badge variant={getStatusVariant(record.status)} size="md" showDot>
              {record.status}
            </Badge>
          </div>
        </div>

        {/* Detailed attributes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3 rounded-lg border border-slate-100 bg-white">
            <span className="text-slate-400 block mb-1">Tipo de Operación</span>
            <span className="font-semibold text-slate-800">{record.operationType}</span>
          </div>
          <div className="p-3 rounded-lg border border-slate-100 bg-white">
            <span className="text-slate-400 block mb-1">Fecha de Registro</span>
            <span className="font-mono font-semibold text-slate-800">{record.date}</span>
          </div>
          <div className="p-3 rounded-lg border border-slate-100 bg-white">
            <span className="text-slate-400 block mb-1">Responsable Interno</span>
            <span className="font-semibold text-slate-800">{record.responsible}</span>
          </div>
          <div className="p-3 rounded-lg border border-slate-100 bg-white">
            <span className="text-slate-400 block mb-1">Departamento Emisor</span>
            <span className="font-semibold text-slate-800">{record.department}</span>
          </div>
        </div>

        {/* Internal notes */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
            Observaciones y Justificación Técnica
          </h4>
          <p className="text-xs text-slate-700 bg-slate-50 p-3.5 rounded-lg border border-slate-200 leading-relaxed">
            {record.notes}
          </p>
        </div>
      </div>
    </Modal>
  );
};
