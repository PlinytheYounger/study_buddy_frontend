import React from 'react';
import './css/main.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div id="main_container">
      <div id="home" className="home">
        <div className="scrollable">
            <Header />
            <Home />
            <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
