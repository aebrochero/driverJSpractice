import React from 'react';
import { PageHeader } from '../../components/layout/PageHeader';
import { EditProfileForm } from '../../components/profile/EditProfileForm';
import { AppRoute } from '../../types/auth';

export interface EditProfilePageProps {
  onNavigate: (route: AppRoute) => void;
}

export const EditProfilePage: React.FC<EditProfilePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6" data-tour="edit-profile-page">
      <PageHeader
        title="Edición de Perfil"
        subtitle="Actualiza tus datos de contacto corporativo, asignación departamental o credenciales de acceso."
      />

      <EditProfileForm
        onCancel={() => onNavigate('perfil')}
        onSuccessNavigate={onNavigate}
      />
    </div>
  );
};
