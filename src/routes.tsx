import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Direct from './pages/Direct';
import DirectChat from './pages/DirectChat';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PasswordReset from './pages/PasswordReset';
import NotFound from './pages/NotFound';
import { RequireAuth } from './contexts/Auth/RequireAuth';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
        
        <Route path='/direct/'>
          <Route path='inbox/' element={<Direct />} />
          <Route path='t/*' element={<DirectChat />} />
        </Route>

        <Route path='/accounts/register/' element={<SignUp />} />

        <Route path='/accounts/password/reset/' element={<PasswordReset />} />

        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
