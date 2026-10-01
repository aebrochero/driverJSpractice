import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AppRoute } from './types/auth';
import { AppLayout } from './components/layout/AppLayout';
import { LoginPage } from './pages/Login/LoginPage';
import { DashboardPage } from './pages/Dashboard/DashboardPage';
import { ManualsPage } from './pages/Manuals/ManualsPage';
import { DataPage } from './pages/Data/DataPage';
import { ProfilePage } from './pages/Profile/ProfilePage';
import { EditProfilePage } from './pages/EditProfile/EditProfilePage';
import { ToastContainer } from './components/ui/Toast';

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  // Helper to parse hash into AppRoute
  const getInitialRoute = (): AppRoute => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (hash === 'manuales') return 'manuales';
    if (hash === 'datos') return 'datos';
    if (hash === 'perfil') return 'perfil';
    if (hash === 'perfil-editar' || hash === 'perfil/editar') return 'perfil-editar';
    if (hash === 'login') return 'login';
    return 'dashboard';
  };

  const [currentRoute, setCurrentRoute] = useState<AppRoute>(getInitialRoute);

  // Sync hash with route
  const navigate = (route: AppRoute) => {
    setCurrentRoute(route);
    const hashMap: Record<AppRoute, string> = {
      login: '#/login',
      dashboard: '#/dashboard',
      manuales: '#/manuales',
      datos: '#/datos',
      perfil: '#/perfil',
      'perfil-editar': '#/perfil/editar',
    };
    window.location.hash = hashMap[route];
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen to hash changes (back/forward browser buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash === 'manuales') setCurrentRoute('manuales');
      else if (hash === 'datos') setCurrentRoute('datos');
      else if (hash === 'perfil') setCurrentRoute('perfil');
      else if (hash === 'perfil-editar' || hash === 'perfil/editar') setCurrentRoute('perfil-editar');
      else if (hash === 'login') setCurrentRoute('login');
      else setCurrentRoute('dashboard');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Auth guarding
  useEffect(() => {
    if (!isAuthenticated && currentRoute !== 'login') {
      setCurrentRoute('login');
      window.location.hash = '#/login';
    } else if (isAuthenticated && currentRoute === 'login') {
      setCurrentRoute('dashboard');
      window.location.hash = '#/dashboard';
    }
  }, [isAuthenticated, currentRoute]);

  // If on login page, render independent layout
  if (currentRoute === 'login' || !isAuthenticated) {
    return (
      <>
        <LoginPage onLoginSuccess={(route) => navigate(route)} />
        <ToastContainer />
      </>
    );
  }

  // Authenticated application layout
  return (
    <AppLayout currentRoute={currentRoute} onNavigate={navigate}>
      {currentRoute === 'dashboard' && <DashboardPage onNavigate={navigate} />}
      {currentRoute === 'manuales' && <ManualsPage />}
      {currentRoute === 'datos' && <DataPage />}
      {currentRoute === 'perfil' && <ProfilePage onNavigate={navigate} />}
      {currentRoute === 'perfil-editar' && <EditProfilePage onNavigate={navigate} />}
    </AppLayout>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
