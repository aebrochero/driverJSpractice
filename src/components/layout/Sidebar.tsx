import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  Database,
  User,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  X
} from 'lucide-react';
import { AppRoute } from '../../types/auth';
import { useAuth } from '../../context/AuthContext';
import { Avatar } from '../ui/Avatar';

export interface SidebarProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentRoute,
  onNavigate,
  isCollapsed,
  onToggleCollapse,
  isMobileOpen,
  onCloseMobile,
}) => {
  const { user, logout } = useAuth();

  const navItems: { id: AppRoute; label: string; icon: React.ReactNode }[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard className="w-4 h-4 shrink-0" />,
    },
    {
      id: 'manuales',
      label: 'Manuales',
      icon: <BookOpen className="w-4 h-4 shrink-0" />,
    },
    {
      id: 'datos',
      label: 'Datos',
      icon: <Database className="w-4 h-4 shrink-0" />,
    },
    {
      id: 'perfil',
      label: 'Perfil',
      icon: <User className="w-4 h-4 shrink-0" />,
    },
  ];

  const handleNavClick = (route: AppRoute) => {
    onNavigate(route);
    onCloseMobile();
  };

  const handleLogoutClick = () => {
    onCloseMobile();
    logout();
    onNavigate('login');
  };

  const content = (
    <div className="flex flex-col h-full bg-slate-900 text-slate-300 border-r border-slate-800 select-none">
      {/* Brand Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-slate-950 font-bold text-sm shrink-0 shadow-xs">
            <ShieldCheck className="w-5 h-5 text-slate-950" />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col min-w-0">
              <span className="font-semibold text-white tracking-tight text-sm truncate">
                VORTEX
              </span>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase truncate">
                Enterprise Core
              </span>
            </div>
          )}
        </div>

        {/* Mobile close button */}
        <button
          type="button"
          onClick={onCloseMobile}
          aria-label="Cerrar navegación"
          className="lg:hidden text-slate-400 hover:text-white p-1 rounded-md"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-4 px-2 space-y-1 overflow-y-auto" data-tour="sidebar-nav">
        {!isCollapsed && (
          <div className="px-3 pb-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
            Navegación
          </div>
        )}
        {navItems.map((item) => {
          const isActive = currentRoute === item.id || (item.id === 'perfil' && currentRoute === 'perfil-editar');
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              title={isCollapsed ? item.label : undefined}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                isActive
                  ? 'bg-slate-800 text-white font-semibold shadow-xs border border-slate-700/60'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <span className={isActive ? 'text-white' : 'text-slate-400'}>
                {item.icon}
              </span>
              {!isCollapsed && <span className="truncate">{item.label}</span>}
              {!isCollapsed && isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" />
              )}
            </button>
          );
        })}

        {/* Prepared space for settings */}
        <div className="pt-4 mt-4 border-t border-slate-800/60">
          {!isCollapsed && (
            <div className="px-3 pb-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              Sistema
            </div>
          )}
          <button
            type="button"
            onClick={() => {
              onNavigate('perfil');
              onCloseMobile();
            }}
            title={isCollapsed ? 'Configuración de cuenta' : undefined}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-colors"
          >
            <Settings className="w-4 h-4 shrink-0 text-slate-400" />
            {!isCollapsed && <span className="truncate">Configuración</span>}
          </button>
        </div>
      </div>

      {/* User Section & Collapse / Logout Footer */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-950/40">
        {!isCollapsed ? (
          <div className="flex items-center justify-between gap-2 mb-2 p-2 rounded-lg bg-slate-800/50 border border-slate-800">
            <div className="flex items-center gap-2.5 min-w-0">
              <Avatar name={`${user.firstName} ${user.lastName}`} size="sm" status="active" />
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white truncate leading-tight">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-[10px] text-slate-400 truncate">{user.role}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center mb-2">
            <Avatar name={`${user.firstName} ${user.lastName}`} size="sm" status="active" />
          </div>
        )}

        <div className="flex items-center justify-between gap-1">
          {/* Logout Action */}
          <button
            type="button"
            onClick={handleLogoutClick}
            data-tour="logout-btn"
            title="Cerrar sesión"
            className={`flex items-center gap-2 px-2.5 py-1.5 text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-950/30 rounded-md transition-colors ${
              isCollapsed ? 'w-full justify-center' : 'flex-1'
            }`}
          >
            <LogOut className="w-3.5 h-3.5 shrink-0" />
            {!isCollapsed && <span>Cerrar sesión</span>}
          </button>

          {/* Desktop Collapse Trigger */}
          <button
            type="button"
            onClick={onToggleCollapse}
            title={isCollapsed ? 'Expandir barra lateral' : 'Colapsar barra lateral'}
            aria-label={isCollapsed ? 'Expandir barra lateral' : 'Colapsar barra lateral'}
            className="hidden lg:flex items-center justify-center p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        data-tour="sidebar"
        className={`hidden lg:block fixed inset-y-0 left-0 z-30 transition-[width] duration-200 ease-in-out ${
          isCollapsed ? 'w-18' : 'w-64'
        }`}
      >
        {content}
      </aside>

      {/* Mobile Drawer Backdrop */}
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          className="lg:hidden fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Panel */}
      <div
        data-tour="sidebar"
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] transform transition-transform duration-200 ease-in-out ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {content}
      </div>
    </>
  );
};
