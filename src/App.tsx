import React from 'react';
import AppRoutes from './routes';
import { AuthProvider } from './contexts/Auth/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
