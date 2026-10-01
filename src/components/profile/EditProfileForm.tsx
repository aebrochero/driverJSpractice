import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card';
import { Lock, Save, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { AppRoute } from '../../types/auth';

export interface EditProfileFormProps {
  onCancel: () => void;
  onSuccessNavigate?: (route: AppRoute) => void;
}

export const EditProfileForm: React.FC<EditProfileFormProps> = ({
  onCancel,
  onSuccessNavigate,
}) => {
  const { user, updateProfile } = useAuth();

  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    role: user.role,
    department: user.department,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const departments = [
    { value: 'Operaciones e Infraestructura', label: 'Operaciones e Infraestructura' },
    { value: 'Tecnología', label: 'Tecnología' },
    { value: 'Seguridad de la Información', label: 'Seguridad de la Información' },
    { value: 'Finanzas y Tesorería', label: 'Finanzas y Tesorería' },
    { value: 'Cumplimiento Legal y Normativo', label: 'Cumplimiento Legal y Normativo' },
    { value: 'Cadena de Suministro', label: 'Cadena de Suministro' },
  ];

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      errs.firstName = 'El nombre es obligatorio.';
    }
    if (!formData.lastName.trim()) {
      errs.lastName = 'El apellido es obligatorio.';
    }
    if (!formData.email.trim()) {
      errs.email = 'El correo institucional es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Introduce un formato de correo corporativo válido.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'El teléfono de contacto es obligatorio.';
    }
    if (!formData.role.trim()) {
      errs.role = 'El cargo es obligatorio.';
    }

    if (formData.newPassword) {
      if (!formData.currentPassword) {
        errs.currentPassword = 'Debes ingresar tu contraseña actual para establecer una nueva.';
      }
      if (formData.newPassword.length < 8) {
        errs.newPassword = 'La nueva contraseña debe contener al menos 8 caracteres.';
      }
      if (formData.newPassword !== formData.confirmPassword) {
        errs.confirmPassword = 'Las contraseñas no coinciden.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate async enterprise update
    setTimeout(() => {
      updateProfile({
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        role: formData.role.trim(),
        department: formData.department,
        currentPassword: formData.currentPassword || undefined,
        newPassword: formData.newPassword || undefined,
      });

      setIsSubmitting(false);
      setIsSaved(true);

      setTimeout(() => {
        if (onSuccessNavigate) {
          onSuccessNavigate('perfil');
        } else {
          onCancel();
        }
      }, 700);
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} data-tour="edit-profile-form">
      <Card className="max-w-3xl mx-auto">
        <CardHeader
          title="Modificar Datos de Usuario"
          subtitle="Actualiza tu información personal y credenciales corporativas"
          action={
            <Button
              variant="ghost"
              size="sm"
              onClick={onCancel}
              leftIcon={<ArrowLeft className="w-3.5 h-3.5" />}
            >
              Volver al perfil
            </Button>
          }
        />

        <CardContent className="space-y-6">
          {/* Section 1: Personal Info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 pb-2 border-b border-slate-100">
              Datos Personales
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Nombre"
                id="edit-firstname"
                required
                value={formData.firstName}
                onChange={(e) => {
                  setFormData({ ...formData, firstName: e.target.value });
                  if (errors.firstName) setErrors({ ...errors, firstName: '' });
                }}
                error={errors.firstName}
                disabled={isSubmitting}
                placeholder="Ej. Andrés"
              />

              <Input
                label="Apellido"
                id="edit-lastname"
                required
                value={formData.lastName}
                onChange={(e) => {
                  setFormData({ ...formData, lastName: e.target.value });
                  if (errors.lastName) setErrors({ ...errors, lastName: '' });
                }}
                error={errors.lastName}
                disabled={isSubmitting}
                placeholder="Ej. Silva Morales"
              />
            </div>
          </div>

          {/* Section 2: Contact & Organizational Info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 pb-2 border-b border-slate-100">
              Contacto y Posición
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Correo Institucional"
                id="edit-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                error={errors.email}
                disabled={isSubmitting}
                placeholder="nombre.apellido@empresa.com"
              />

              <Input
                label="Teléfono de Contacto"
                id="edit-phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: '' });
                }}
                error={errors.phone}
                disabled={isSubmitting}
                placeholder="+52 55 1234 5678"
              />

              <Input
                label="Cargo / Título Profesional"
                id="edit-role"
                required
                value={formData.role}
                onChange={(e) => {
                  setFormData({ ...formData, role: e.target.value });
                  if (errors.role) setErrors({ ...errors, role: '' });
                }}
                error={errors.role}
                disabled={isSubmitting}
                placeholder="Ej. Director de Operaciones"
              />

              <Select
                label="Departamento Asignado"
                id="edit-department"
                required
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                options={departments}
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Section 3: Password Update */}
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Cambio de Contraseña (Opcional)
              </h4>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Completa estos campos únicamente si deseas actualizar tu clave de acceso.
            </p>

            <div className="space-y-4 max-w-lg">
              <Input
                label="Contraseña Actual"
                id="edit-current-password"
                type="password"
                value={formData.currentPassword}
                onChange={(e) => {
                  setFormData({ ...formData, currentPassword: e.target.value });
                  if (errors.currentPassword) setErrors({ ...errors, currentPassword: '' });
                }}
                error={errors.currentPassword}
                disabled={isSubmitting}
                placeholder="Ingresa tu clave actual para autorizar"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Nueva Contraseña"
                  id="edit-new-password"
                  type="password"
                  value={formData.newPassword}
                  onChange={(e) => {
                    setFormData({ ...formData, newPassword: e.target.value });
                    if (errors.newPassword) setErrors({ ...errors, newPassword: '' });
                  }}
                  error={errors.newPassword}
                  disabled={isSubmitting}
                  placeholder="Mínimo 8 caracteres"
                />

                <Input
                  label="Confirmar Contraseña"
                  id="edit-confirm-password"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => {
                    setFormData({ ...formData, confirmPassword: e.target.value });
                    if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
                  }}
                  error={errors.confirmPassword}
                  disabled={isSubmitting}
                  placeholder="Repite la contraseña"
                />
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="justify-between">
          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            variant="primary"
            size="md"
            isLoading={isSubmitting}
            leftIcon={isSaved ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4" />}
          >
            {isSaved ? 'Cambios guardados' : 'Guardar cambios'}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
