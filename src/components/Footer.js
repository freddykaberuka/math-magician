import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      copyrightⓒFreddyKaberuka
      {' '}
      <Link to="https://github.com/freddykaberuka/math-magician" />
    </div>
  );
}

export default Footer;
