import React from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowRight, Clock, ShieldCheck, Download } from 'lucide-react';
import { ManualItem } from '../../types/manuals';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export interface ManualCardProps {
  manual: ManualItem;
  onOpen: (manual: ManualItem) => void;
}

export const ManualCard: React.FC<ManualCardProps> = ({ manual, onOpen }) => {
  const getStatusVariant = (status: ManualItem['status']) => {
    switch (status) {
      case 'Vigente':
        return 'success';
      case 'Actualizado':
        return 'info';
      case 'En revisión':
        return 'warning';
      case 'Archivado':
        return 'neutral';
      default:
        return 'neutral';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
    >
      <div>
        {/* Top line: code & status badge */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="font-mono text-xs font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
            {manual.code}
          </span>
          <Badge variant={getStatusVariant(manual.status)} size="sm" showDot>
            {manual.status}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-slate-900 tracking-tight leading-snug mb-2 line-clamp-2">
          {manual.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
          {manual.description}
        </p>

        {/* Unboxed Metadata row with typographic separators */}
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 mb-4 pb-3 border-b border-slate-100 font-mono">
          <span>{manual.category}</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>{manual.version}</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>{manual.readTime}</span>
        </div>
      </div>

      {/* Card Action footer */}
      <div className="flex items-center justify-between gap-2 pt-1">
        <span className="text-[11px] text-slate-400 truncate max-w-[140px]">
          {manual.department}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onOpen(manual)}
          rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
        >
          Ver manual
        </Button>
      </div>
    </motion.div>
  );
};
