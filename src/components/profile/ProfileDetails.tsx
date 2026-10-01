import React from 'react';
import { UserProfile } from '../../types/auth';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Mail, Phone, MapPin, Globe, Shield, KeyRound, Award, CheckCircle } from 'lucide-react';

export const ProfileDetails: React.FC<{ user: UserProfile }> = ({ user }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-tour="profile-details">
      {/* 1. Información Personal y de Contacto */}
      <Card>
        <CardHeader
          title="Información de Contacto"
          subtitle="Canales oficiales de comunicación corporativa"
        />
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div className="min-w-0">
              <span className="text-[11px] font-medium text-slate-500 block">Correo Institucional</span>
              <span className="text-xs font-semibold text-slate-900 break-all">{user.email}</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">Teléfono Directo</span>
              <span className="text-xs font-mono font-semibold text-slate-900">{user.phone}</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">Ubicación Física</span>
              <span className="text-xs font-semibold text-slate-900">{user.location}</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Globe className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">Zona Horaria Asignada</span>
              <span className="text-xs font-mono text-slate-700">{user.timezone}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. Organización y Credenciales */}
      <Card>
        <CardHeader
          title="Credenciales Corporativas"
          subtitle="Atribución organizacional y niveles de autorización"
        />
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <Award className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">Código de Empleado</span>
              <span className="text-xs font-mono font-semibold text-slate-900">{user.employeeCode}</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Shield className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">Nivel de Acceso en Sistema</span>
              <span className="text-xs font-semibold text-slate-900">{user.accessLevel} (Auditoría Total)</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <KeyRound className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">Autenticación Multifactor (MFA)</span>
              <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                Habilitada y verificada vía token de hardware
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-4 h-4 text-slate-400 mt-0.5 shrink-0 flex items-center justify-center font-mono text-[10px]">
              ID
            </div>
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">Identificador Único (UUID)</span>
              <span className="text-xs font-mono text-slate-500">{user.id}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
