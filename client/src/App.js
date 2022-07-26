import logo from './logo.svg';
import './App.css';

import react from 'react'
import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create';
import About from './components/About';
import View from './components/View';
import Library from './components/Library';

function App() {
  return (
    <div className="App">
      <header>
        {/* Import Nav here */}
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path='/library' element={ <Library /> } /> 
          <Route path="/create" element={ <Create /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/view" element={ <View /> } />
        </Routes>
      </main>
    </div>
  )
}

export default App;
