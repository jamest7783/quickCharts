import logo from './logo.svg';
import './App.css';

import react from 'react'
import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <header>
        {/* Import Nav here */}
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </main>
    </div>
  )
}

export default App;
