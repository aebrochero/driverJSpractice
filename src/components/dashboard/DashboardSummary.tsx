import React from 'react';
import { FileText, CheckCircle2, Clock, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { AppRoute } from '../../types/auth';

export const DashboardSummary: React.FC<{ onNavigate: (route: AppRoute) => void }> = ({ onNavigate }) => {
  const metrics = [
    {
      label: 'Operaciones Registradas',
      value: '20',
      detail: 'Todas conciliadas en mes',
      trend: '+4 vs semana anterior',
    },
    {
      label: 'Monto Transaccional Auditado',
      value: '$10,140,840 USD',
      detail: 'Cuentas corporativas globales',
      trend: '99.8% efectividad',
    },
    {
      label: 'Manuales y Políticas Activas',
      value: '8 / 9',
      detail: '1 documento en revisión técnica',
      trend: 'Versiones 2026',
    },
    {
      label: 'Disponibilidad de Servicios',
      value: '99.98%',
      detail: 'Infraestructura Cloud y ERP',
      trend: 'Sin incidentes críticos',
    },
  ];

  const recentLogs = [
    {
      id: 'log-1',
      action: 'Consulta y validación de lote transaccional TX-2026-9041',
      user: 'Andrés Silva',
      time: 'Hace 25 minutos',
      status: 'Completado',
    },
    {
      id: 'log-2',
      action: 'Actualización de versión v3.4.1 de Protocolo IAM',
      user: 'Gerencia de Ciberseguridad',
      time: 'Hace 2 horas',
      status: 'Aprobado',
    },
    {
      id: 'log-3',
      action: 'Aprobación de orden de aprovisionamiento de generadores Tier IV',
      user: 'Jorge Valenzuela',
      time: 'Hace 5 horas',
      status: 'En proceso',
    },
    {
      id: 'log-4',
      action: 'Cierre de conciliación bancaria semanal con Santander CIB',
      user: 'Carlos Benítez',
      time: 'Ayer, 18:40',
      status: 'Completado',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* 2 Cols: Metric Grid */}
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-xs"
            >
              <div className="text-xs font-medium text-slate-500 mb-1">{item.label}</div>
              <div className="text-xl font-bold font-mono tabular-nums text-slate-900 tracking-tight mb-1">
                {item.value}
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                <span>{item.detail}</span>
                <span className="font-medium text-emerald-700">{item.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick link banner to data table */}
        <div className="bg-slate-100/70 border border-slate-200/80 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h4 className="text-xs font-semibold text-slate-900 tracking-tight">
              ¿Deseas auditar transacciones específicas?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Accede a la tabla completa con filtros por tipo de operación, estado y fecha de corte.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('datos')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-slate-950 underline underline-offset-4 shrink-0"
          >
            <span>Ver tabla de datos</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 1 Col: Recent Audit Timeline */}
      <div className="lg:col-span-1">
        <Card className="h-full flex flex-col justify-between">
          <div>
            <CardHeader
              title="Actividad Reciente"
              subtitle="Bitácora de operaciones y accesos"
            />
            <CardContent className="space-y-4">
              {recentLogs.map((log) => (
                <div key={log.id} className="flex items-start gap-3 text-xs">
                  <div className="w-2 h-2 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-slate-900 leading-snug">{log.action}</p>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-1">
                      <span>{log.user}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{log.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};
