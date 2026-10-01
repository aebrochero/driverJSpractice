import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserProfile, UserUpdatePayload } from '../types/auth';
import { initialUserProfile } from '../mocks/user';

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
}

interface AuthContextType {
  user: UserProfile;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  updateProfile: (payload: UserUpdatePayload) => void;
  toasts: ToastMessage[];
  showToast: (toast: Omit<ToastMessage, 'id'>) => void;
  dismissToast: (id: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile>(initialUserProfile);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (toast: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      dismissToast(id);
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const login = (email: string, _pass: string): boolean => {
    setIsAuthenticated(true);
    showToast({
      type: 'success',
      title: 'Sesión iniciada',
      message: `Bienvenido de nuevo, ${user.firstName}.`
    });
    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    showToast({
      type: 'info',
      title: 'Sesión finalizada',
      message: 'Has cerrado la sesión de manera segura.'
    });
  };

  const updateProfile = (payload: UserUpdatePayload) => {
    setUser((prev) => ({
      ...prev,
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      phone: payload.phone,
      role: payload.role,
      department: payload.department,
    }));

    showToast({
      type: 'success',
      title: 'Perfil actualizado',
      message: 'Los cambios han sido guardados satisfactoriamente en el sistema.'
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        updateProfile,
        toasts,
        showToast,
        dismissToast,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
};
