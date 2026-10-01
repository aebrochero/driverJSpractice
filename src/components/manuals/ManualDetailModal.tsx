import React from 'react';
import { ManualItem } from '../../types/manuals';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Download, FileText, CheckCircle2, Shield, Calendar, User, Building2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export interface ManualDetailModalProps {
  manual: ManualItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ManualDetailModal: React.FC<ManualDetailModalProps> = ({
  manual,
  isOpen,
  onClose,
}) => {
  const { showToast } = useAuth();

  if (!manual) return null;

  const handleDownload = () => {
    showToast({
      type: 'success',
      title: 'Descarga iniciada',
      message: `El archivo ${manual.code}_${manual.version}.pdf se ha generado correctamente.`
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={manual.title}
      subtitle={`Código de referencia: ${manual.code} · ${manual.type}`}
      maxWidth="xl"
      footer={
        <>
          <Button variant="outline" size="sm" onClick={onClose}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={handleDownload}
            leftIcon={<Download className="w-3.5 h-3.5" />}
          >
            Descargar PDF oficial
          </Button>
        </>
      }
    >
      <div className="space-y-6">
        {/* Top metadata grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200/80 text-xs">
          <div>
            <span className="text-[11px] text-slate-500 block">Categoría</span>
            <span className="font-semibold text-slate-900">{manual.category}</span>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 block">Versión activa</span>
            <span className="font-mono font-semibold text-slate-900">{manual.version}</span>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 block">Última revisión</span>
            <span className="font-semibold text-slate-900">{manual.lastUpdated}</span>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 block">Estado normativo</span>
            <div className="mt-0.5">
              <Badge variant="success" size="sm" showDot>
                {manual.status}
              </Badge>
            </div>
          </div>
        </div>

        {/* Abstract */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Alcance del Procedimiento
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed bg-white p-3.5 rounded-lg border border-slate-200">
            {manual.description}
          </p>
        </div>

        {/* Sections Checklist */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Módulos y Capítulos Incluidos ({manual.sectionsCount} apartados)
          </h4>
          <div className="space-y-2">
            {manual.contentSummary.map((section, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg border border-slate-100 bg-slate-50/50 text-xs text-slate-800"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span className="font-medium">
                  Sección {idx + 1}: {section}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Governance & Responsibles */}
        <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-slate-400" />
            <span>Emitido por: <strong className="text-slate-800 font-semibold">{manual.author}</strong></span>
          </div>
          <div className="flex items-center gap-2 font-mono tabular-nums">
            <FileText className="w-4 h-4 text-slate-400" />
            <span>{manual.downloadsCount} consultas institucionales registradas</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};
