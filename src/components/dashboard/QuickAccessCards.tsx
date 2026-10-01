import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Database, UserCheck, ArrowRight } from 'lucide-react';
import { AppRoute } from '../../types/auth';

interface QuickActionProps {
  title: string;
  description: string;
  actionText: string;
  icon: React.ReactNode;
  route: AppRoute;
  badgeText: string;
  tourId: string;
  onNavigate: (route: AppRoute) => void;
}

export const QuickAccessCards: React.FC<{ onNavigate: (route: AppRoute) => void }> = ({ onNavigate }) => {
  const cards: QuickActionProps[] = [
    {
      title: 'Manuales y Documentación',
      description: 'Accede al repositorio institucional de guías técnicas, normativas operativas y protocolos estándar vigentes.',
      actionText: 'Explorar manuales',
      badgeText: '9 documentos',
      icon: <BookOpen className="w-5 h-5 text-slate-800" />,
      route: 'manuales',
      tourId: 'quick-action-manuals',
      onNavigate,
    },
    {
      title: 'Consulta de Registros',
      description: 'Examina tablas de datos transaccionales, auditorías de activos y exportación de operaciones de tesorería y nube.',
      actionText: 'Consultar datos',
      badgeText: '20 registros activos',
      icon: <Database className="w-5 h-5 text-slate-800" />,
      route: 'datos',
      tourId: 'quick-action-data',
      onNavigate,
    },
    {
      title: 'Mi Perfil de Usuario',
      description: 'Revisa tu información personal, rol corporativo asignado, departamento y gestiona la actualización de tus datos.',
      actionText: 'Gestionar perfil',
      badgeText: 'Activo',
      icon: <UserCheck className="w-5 h-5 text-slate-800" />,
      route: 'perfil',
      tourId: 'quick-action-profile',
      onNavigate,
    },
  ];

  return (
    <section data-tour="quick-actions" className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900 tracking-tight">
            Accesos Rápidos
          </h3>
          <p className="text-xs text-slate-500">
            Navegación directa a los módulos principales de la plataforma
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            data-tour={card.tourId}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.15 }}
            onClick={() => onNavigate(card.route)}
            className="group bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs hover:border-slate-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Header row inside card */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200/60 group-hover:bg-slate-200/60 transition-colors">
                  {card.icon}
                </div>
                <span className="text-[11px] font-mono tabular-nums text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                  {card.badgeText}
                </span>
              </div>

              {/* Title & Description */}
              <h4 className="text-sm font-semibold text-slate-900 group-hover:text-slate-950 transition-colors tracking-tight mb-1.5">
                {card.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                {card.description}
              </p>
            </div>

            {/* Action footer */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-900 group-hover:text-slate-950">
              <span>{card.actionText}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
