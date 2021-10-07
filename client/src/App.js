import Navbar from './components/Navbar/Navbar';
import './assets/scss/global.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react'
import HomePage from './pages/HomePage/HomePage';



function App() {

  return (
    <Router>

      <div className="App">
        <Navbar />
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
