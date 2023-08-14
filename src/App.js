import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator';
import Quote from './components/Quote/Quote';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <span>Math Magicians</span>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/quote">Quote</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
