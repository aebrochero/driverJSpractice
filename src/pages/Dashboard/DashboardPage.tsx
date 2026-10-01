import React from 'react';
import { AppRoute } from '../../types/auth';
import { WelcomeBanner } from '../../components/dashboard/WelcomeBanner';
import { QuickAccessCards } from '../../components/dashboard/QuickAccessCards';
import { DashboardSummary } from '../../components/dashboard/DashboardSummary';

export interface DashboardPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6" data-tour="dashboard-main">
      {/* 1. Welcome Hero Banner */}
      <WelcomeBanner onNavigate={onNavigate} />

      {/* 2. Quick Access Cards */}
      <QuickAccessCards onNavigate={onNavigate} />

      {/* 3. Operational Overview & Audit Activity */}
      <section data-tour="dashboard-summary">
        <div className="mb-4">
          <h3 className="text-base font-semibold text-slate-900 tracking-tight">
            Resumen Operativo
          </h3>
          <p className="text-xs text-slate-500">
            Indicadores clave de rendimiento y registro de eventos del sistema
          </p>
        </div>
        <DashboardSummary onNavigate={onNavigate} />
      </section>
    </div>
  );
};
