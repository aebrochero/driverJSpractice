import React from 'react';
import { Menu, ChevronRight, Bell, Shield } from 'lucide-react';
import { AppRoute } from '../../types/auth';
import { useAuth } from '../../context/AuthContext';
import { Avatar } from '../ui/Avatar';

export interface HeaderProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
  onOpenMobileSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenMobileSidebar,
}) => {
  const { user } = useAuth();

  const getBreadcrumbs = () => {
    const routeNames: Record<AppRoute, string> = {
      login: 'Acceso',
      dashboard: 'Dashboard',
      manuales: 'Manuales y Documentación',
      datos: 'Registros y Datos',
      perfil: 'Perfil de Usuario',
      'perfil-editar': 'Edición de Perfil',
    };

    return [
      { label: 'Vortex Enterprise', route: 'dashboard' as AppRoute },
      { label: routeNames[currentRoute], route: currentRoute },
    ];
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <header
      data-tour="header"
      className="sticky top-0 z-20 h-16 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 flex items-center justify-between gap-4"
    >
      {/* Left: Mobile trigger & Breadcrumbs */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          onClick={onOpenMobileSidebar}
          aria-label="Abrir menú de navegación"
          className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Breadcrumb Trail */}
        <nav aria-label="Ruta de navegación" className="flex items-center gap-1.5 text-xs text-slate-500 overflow-hidden">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />}
              {idx === breadcrumbs.length - 1 ? (
                <span className="font-semibold text-slate-900 truncate">
                  {crumb.label}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => onNavigate(crumb.route)}
                  className="hover:text-slate-900 transition-colors truncate"
                >
                  {crumb.label}
                </button>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* Right: Environment indicator, Notifications & User snippet */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Environment Trust Badge */}
        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-[11px] font-mono text-slate-600">
          <Shield className="w-3 h-3 text-emerald-600" />
          <span>PROD · SESIÓN SEGURA</span>
        </div>

        {/* Notifications Icon (Sober) */}
        <button
          type="button"
          aria-label="Notificaciones del sistema"
          className="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
          title="Sin notificaciones pendientes"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </button>

        {/* User profile quick access */}
        <button
          type="button"
          onClick={() => onNavigate('perfil')}
          data-tour="profile-quick-access"
          title="Ver perfil de usuario"
          className="flex items-center gap-2.5 pl-2 pr-3 py-1 rounded-lg hover:bg-slate-100 transition-colors group text-left"
        >
          <Avatar name={`${user.firstName} ${user.lastName}`} size="sm" status="active" />
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs font-semibold text-slate-900 group-hover:text-slate-950 truncate max-w-[120px]">
              {user.firstName} {user.lastName}
            </span>
            <span className="text-[10px] text-slate-500 truncate max-w-[120px]">
              {user.department}
            </span>
          </div>
        </button>
      </div>
    </header>
  );
};
