export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  employeeCode: string;
  registrationDate: string;
  lastLogin: string;
  status: 'active' | 'inactive' | 'suspended';
  location: string;
  timezone: string;
  accessLevel: 'Administrador' | 'Operador Senior' | 'Auditor' | 'Consultor';
}

export interface UserUpdatePayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  currentPassword?: string;
  newPassword?: string;
}

export type AppRoute = 
  | 'login'
  | 'dashboard'
  | 'manuales'
  | 'datos'
  | 'perfil'
  | 'perfil-editar';
