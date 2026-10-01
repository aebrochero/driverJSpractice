import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { PageHeader } from '../../components/layout/PageHeader';
import { ProfileHeader } from '../../components/profile/ProfileHeader';
import { ProfileDetails } from '../../components/profile/ProfileDetails';
import { AppRoute } from '../../types/auth';

export interface ProfilePageProps {
  onNavigate: (route: AppRoute) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ onNavigate }) => {
  const { user } = useAuth();

  return (
    <div className="space-y-6" data-tour="profile-page">
      <PageHeader
        title="Perfil de Usuario"
        subtitle="Visualiza tu ficha corporativa, canales de contacto y niveles de autorización dentro de la plataforma empresarial."
      />

      {/* Main Profile Identity Banner */}
      <ProfileHeader
        user={user}
        onEdit={() => onNavigate('perfil-editar')}
      />

      {/* Structured Details Sections */}
      <ProfileDetails user={user} />
    </div>
  );
};
