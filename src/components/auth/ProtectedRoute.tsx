import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { api } from '../../lib/api';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading, logout } = useUser();
  const [verifying, setVerifying] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      if (!user) {
        setVerifying(false);
        return;
      }

      try {
        // Verify token by calling /me endpoint
        await api('/api/auth/me');
        setVerifying(false);
      } catch (error) {
        console.error('Token verification failed:', error);
        logout(); // Logout if token invalid
        setVerifying(false);
      }
    };

    if (!loading) {
      verifyToken();
    }
  }, [user, loading, logout]);

  // If still loading auth state or verifying token, show loading
  if (loading || verifying) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated and token valid, show the protected content
  return <>{children}</>;
};

export default ProtectedRoute;
