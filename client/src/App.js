import react from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Create from './components/Create';
import About from './components/About';
import Preview from './components/Preview';
import Library from './components/Library';
import ViewPost from './components/ViewPost'
import axios from 'axios'
import MakeUser from './components/MakeUser'

function App() {

  let [ post, setPost ] = useState({})
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
          const res = await axios.get('charts')  
          //console.log(res)
          setCharts( res.data )
          //console.log(res.data)
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
          <Route path='/library' element={ <Library post={post} setPost={setPost} charts={ charts } search={search} setSearch={setSearch} found={found} setFound={setFound} setChart={setChart}/> } /> 
          <Route path="/create" element={ <Create chart={chart} setChart={setChart}  user={user}/> } />
          <Route path="/profile" element={ <MakeUser setChart={ setChart }charts={charts}setCharts={setCharts} user={user} setUser={setUser} name={name} setName={setName} chart={chart}  /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/preview" element={ <Preview chart={chart} user={ user } /> } />
          <Route path="/viewpost" element={ <ViewPost post={post}/> } />
        </Routes>
      </main>
    </div>
  )
}

export default App;
