import react from 'react'
import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create';
import About from './components/About';
import View from './components/View';
import Library from './components/Library';
import { useEffect } from 'react'
import axios from 'axios'

function App() {

  const [ charts, setCharts ] = useState([])
  const [ chart, setChart ] = useState({
      labels: [],  
      datasets: [{
          label: 'title',
          data: [] 
      }]
  }) 
    
  useEffect( ( ) => {
      const getCharts = async () => {
          const res = await axios.get('http://localhost:3001/charts')
          setCharts( res.data )
      } 
      getCharts()
  },[])

  return (
    <div className="App">
      <header>
        {/* Import Nav here */}
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home charts={ charts }/> } />
          <Route path='/library' element={ <Library charts={ charts }/> } /> 
          <Route path="/create" element={ <Create chart={chart} setChart={setChart}/> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/view" element={ <View chart={chart} /> } />
        </Routes>
      </main>
    </div>
  )
}

export default App;
