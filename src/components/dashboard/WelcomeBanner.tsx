import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { ShieldCheck, ArrowRight, BookOpen, Database, UserCheck } from 'lucide-react';
import { AppRoute } from '../../types/auth';

export const WelcomeBanner: React.FC<{ onNavigate: (route: AppRoute) => void }> = ({ onNavigate }) => {
  const { user } = useAuth();

  return (
    <div
      data-tour="welcome-banner"
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-sm mb-8"
    >
      {/* Background subtle geometric accents */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-slate-700/10 pointer-events-none blur-2xl" />
      <div className="absolute bottom-0 right-1/4 -mb-16 w-60 h-60 rounded-full bg-slate-600/10 pointer-events-none blur-xl" />

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/10 text-[11px] font-mono tracking-wider text-slate-300 uppercase mb-3 border border-white/10">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Panel Operativo Consolidado</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
          Buen día, {user.firstName}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed max-w-2xl">
          Bienvenido al entorno unificado de gestión corporativa de Vortex. Desde esta plataforma centralizada puedes consultar la documentación técnica oficial, auditar y filtrar registros operacionales en tiempo real y gestionar la configuración de tu cuenta.
        </p>

        {/* Feature summary row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-700/60">
          <button
            type="button"
            onClick={() => onNavigate('manuales')}
            className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left group"
          >
            <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-white shrink-0" />
            <div className="min-w-0">
              <span className="block text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                Documentación técnica
              </span>
              <span className="block text-[11px] text-slate-400 truncate">
                9 manuales disponibles
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('datos')}
            className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left group"
          >
            <Database className="w-4 h-4 text-slate-400 group-hover:text-white shrink-0" />
            <div className="min-w-0">
              <span className="block text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                Registros operativos
              </span>
              <span className="block text-[11px] text-slate-400 truncate">
                Tablas y conciliaciones
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('perfil')}
            className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left group"
          >
            <UserCheck className="w-4 h-4 text-slate-400 group-hover:text-white shrink-0" />
            <div className="min-w-0">
              <span className="block text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                Perfil corporativo
              </span>
              <span className="block text-[11px] text-slate-400 truncate">
                {user.role}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
