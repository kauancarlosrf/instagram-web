import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Direct from './pages/Direct';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PasswordReset from './pages/PasswordReset';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/direct/inbox/' element={<Direct />} />

        <Route path='/login/' element={<SignIn />} />
        <Route path='/register/' element={<SignUp />} />

        <Route path='/accounts/password/reset/' element={<PasswordReset />} />

        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
