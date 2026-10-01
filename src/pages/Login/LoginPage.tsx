import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { ShieldCheck, Lock, Mail, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { AppRoute } from '../../types/auth';

export interface LoginPageProps {
  onLoginSuccess: (route: AppRoute) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const { login } = useAuth();

  const [email, setEmail] = useState('andres.silva@vortex-corp.internal');
  const [password, setPassword] = useState('••••••••••••');
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Por favor ingresa tu correo institucional.');
      return;
    }
    if (!password.trim()) {
      setError('Por favor ingresa tu contraseña corporativa.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      login(email, password);
      setIsLoading(false);
      onLoginSuccess('dashboard');
    }, 500);
  };

  const handleQuickFill = () => {
    setEmail('andres.silva@vortex-corp.internal');
    setPassword('CorporatePass2026!');
    setError('');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-800/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        {/* Left column: Enterprise Branding & System Statement (Desktop) */}
        <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
          <div>
            {/* Platform Brand */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-950 font-bold shadow-md">
                <ShieldCheck className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white leading-none">
                  VORTEX
                </h1>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  Enterprise Core
                </span>
              </div>
            </div>

            {/* Value Proposition */}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 leading-tight">
              Gestión corporativa unificada y control operacional
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Acceso seguro para directores, auditores y personal operativo autorizado. Consulta de documentación oficial, auditoría de transacciones y administración de credenciales de usuario.
            </p>

            {/* Trust Points */}
            <div className="space-y-3 pt-6 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Protocolo de cifrado TLS 1.3 y sesión auditada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Repositorio técnico estandarizado bajo normas ISO</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Trazabilidad de operaciones en tiempo real</span>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-8 text-[11px] font-mono text-slate-500">
            <span>SISTEMA DE USO INTERNO · ID VTX-2026-CORE</span>
          </div>
        </div>

        {/* Right column: Login Form */}
        <div className="lg:col-span-6 p-8 sm:p-12 bg-white flex flex-col justify-between">
          <div className="max-w-md w-full mx-auto my-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                Iniciar Sesión
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Ingresa con tu correo institucional y contraseña de acceso
              </p>
            </div>

            {error && (
              <div className="mb-6 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold block">Error de autenticación</span>
                  <span>{error}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Correo Institucional"
                id="login-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="colaborador@vortex-corp.internal"
                leftIcon={<Mail className="w-4 h-4" />}
                disabled={isLoading}
              />

              <Input
                label="Contraseña"
                id="login-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                leftIcon={<Lock className="w-4 h-4" />}
                disabled={isLoading}
              />

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-slate-900 border-slate-300 focus:ring-slate-900"
                  />
                  <span>Recordar sesión</span>
                </label>

                <button
                  type="button"
                  onClick={() => alert('Para restablecer tu contraseña, contacta a la mesa de ayuda interna: it-support@vortex-corp.internal')}
                  className="font-medium text-slate-600 hover:text-slate-900 underline underline-offset-2 transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isLoading}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full"
                >
                  Ingresar a la plataforma
                </Button>
              </div>
            </form>

            {/* Quick Demo Fill Helper */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-slate-800 block">Acceso de Demostración</span>
                  <span className="text-[11px] text-slate-500 font-mono">andres.silva@vortex-corp.internal</span>
                </div>
                <Button variant="outline" size="sm" onClick={handleQuickFill}>
                  Auto-rellenar
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center text-[11px] text-slate-400 mt-6">
            <span>© 2026 Vortex Corporation. Todos los derechos reservados.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
