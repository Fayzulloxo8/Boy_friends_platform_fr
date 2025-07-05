import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home/home'
import Nav from './components/nav/nav'
import Footer from './components/footer/footer'
import MovieDetail from './components/in-movie/in-movie';
import Login from './components/login/login';
import Profile from './components/profile/profile'

const App = () => {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
};

const AppContext = () => {
  return (
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  );
};

export default AppContext;
