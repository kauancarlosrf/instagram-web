import React from 'react';
import Home from './pages/Home';
import Direct from './pages/Direct';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/direct/inbox/' element={<Direct />} />

        <Route path='/login/' element={<SignIn />} />
        <Route path='/register/' element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  );
}
