import React from 'react';
import { Link } from 'react-router-dom';

function Tabs() {
  return (
    <div className="header">
      <h1>Math Magicians</h1>
      <nav style={{ padding: '40px', textDecoration: 'none', fontSize: '32px' }}>
        <Link to="/">Home</Link>
        {' '}
        |
        <Link to="/calculator">Calculator</Link>
        {' '}
        |
        <Link to="/quote">Quote</Link>
      </nav>
    </div>
  );
}

export default Tabs;
