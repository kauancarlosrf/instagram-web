import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Direct from './pages/Direct';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PasswordReset from './pages/PasswordReset';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/direct/inbox/' element={<Direct />} />

        <Route path='/login/' element={<SignIn />} />
        <Route path='/register/' element={<SignUp />} />

        <Route path='/accounts/password/reset/' element={<PasswordReset />} />

        {/*
            Posso ter uma rota talvez mais ou menos assim pra cada perfil... pensar sobre isso
            <Route path='prato/:id' element={<Prato />} />
        */}

        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
