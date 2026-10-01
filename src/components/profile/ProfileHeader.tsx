import React from 'react';
import { UserProfile } from '../../types/auth';
import { Avatar } from '../ui/Avatar';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Edit3, ShieldCheck, MapPin, Calendar, Building2 } from 'lucide-react';

export interface ProfileHeaderProps {
  user: UserProfile;
  onEdit: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user, onEdit }) => {
  return (
    <div
      data-tour="profile-header"
      className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-xs mb-8"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Left: Avatar & primary identity */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <Avatar
            name={`${user.firstName} ${user.lastName}`}
            size="xl"
            status="active"
          />

          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                {user.firstName} {user.lastName}
              </h2>
              <Badge variant="success" size="sm" showDot>
                Colaborador Activo
              </Badge>
            </div>

            <p className="text-sm font-medium text-slate-700 mb-2">
              {user.role}
            </p>

            {/* Unboxed Metadata row */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                {user.department}
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {user.location}
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Alta: {user.registrationDate}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Edit Profile Action Button */}
        <div className="shrink-0 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
          <Button
            variant="primary"
            size="md"
            onClick={onEdit}
            data-tour="edit-profile-btn"
            leftIcon={<Edit3 className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Editar perfil
          </Button>
        </div>
      </div>
    </div>
  );
};
