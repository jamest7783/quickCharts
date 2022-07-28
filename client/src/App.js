import react from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Create from './components/Create';
import About from './components/About';
import View from './components/View';
import Library from './components/Library';
import axios from 'axios'
import MakeUser from './components/MakeUser'

function App() {

  const [ search, setSearch ] = useState('') 
  const [ found, setFound ] = useState([])
  const [ user, setUser ] = useState({
    name: 'username',
    icon: 'icon url will be here'
  })
  const [ name, setName ] = useState(user.name)
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
          console.log(res)
          setCharts( res.data )
          console.log(res.data)
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
          <Route path="/" element={ <Home charts={ charts } search={search} setSearch={setSearch}/> } />
          <Route path='/library' element={ <Library charts={ charts } search={search} setSearch={setSearch} found={found} setFound={setFound}/> } /> 
          <Route path="/create" element={ <Create chart={chart} setChart={setChart}  user={user}/> } />
          <Route path="/profile" element={ <MakeUser setChart={ setChart }charts={charts}setCharts={setCharts} user={user} setUser={setUser} name={name} setName={setName} chart={chart}  /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/view" element={ <View chart={chart} name={ name } /> } />
        </Routes>
      </main>
    </div>
  )
}

export default App;
