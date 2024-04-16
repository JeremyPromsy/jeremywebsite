import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav'
import NavLogo from './components/NavLogo'
import Footer from './components/Footer'

import Home from './pages/Home'
import Error404 from './pages/404'
import Contact from './pages/Contact'
import Mentions from './pages/MentionsLégales'
import Informations from './pages/Informations'

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Nav />
    <NavLogo />
    <Routes>
      <Route path = "/" element ={<Home />} />
      <Route path = "/contact" element ={<Contact />} />
      <Route path = "/mentionslégales" element ={<Mentions />} /> 
      <Route path = "/informations" element ={<Informations />} /> 
      <Route path = "*" element ={<Error404 />} /> 
    </Routes>
    <Footer />
    </HashRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
