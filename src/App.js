import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Tabs from './components/Tabs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Tabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
