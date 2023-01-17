
import React from 'react';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import Blog from './Screens/Blog';
import { Routes,  Route,  NavLink, Link } from 'react-router-dom';

export default function App() {

  return (
    <>
      <div className="container">
        <div className='row'>
          <div className='col-12'>
            <nav>
              <NavLink to="/">Ana sayfa</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className='col-12'>
            <Routes>
              <Route path="/" exact   element={ <Home /> } />
              <Route path="/contact" element={ <Contact /> } />
              <Route path="/blog" element={ <Blog /> } />                       
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
} 