import Search from "./Search"
import Projects from "./Projects"
import { Link } from 'react-router-dom'
import Post from './Post'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Library = ({ search, setSearch, charts }) => {

    let [ library, setLibrary ] = useState([])
    console.log( search )
     

    async function retrieveCharts() { 
        const res = await axios.get('http://localhost:3001/charts')
        setLibrary( res.data.barCharts )
        //console.log( "library = ",library )
    }

    useEffect(()=> {
        retrieveCharts()
    },[])

    return (
        <div>
            <Link to='/'>back to Home</Link>
            <Search search={search} setSearch={setSearch}/>
            <h3>{search}</h3>
            <Projects/>
            { library.map((chart)=> (
                <Post chart={chart} />
            ))}
        </div>
    )
}

export default Library