import Search from "./Search"
 
import { Link } from 'react-router-dom'
import Post from './Post'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Library = ({ search, setSearch, charts, found, setFound }) => {

    let [ shelf, setShelf ] = useState([])
 
    console.log("search-->",search)
    async function retrieveCharts() { 
        const res = await axios.get('http://localhost:3001/charts')
        setShelf( res.data.barCharts )
        setFound(res.data.barCharts ) 
    }
    useEffect(()=> {
        retrieveCharts()
    },[])
   

    return (
        <div>
            <Link to='/'>back to Home</Link>
            <Search search={search}setSearch={setSearch}charts={charts}shelf={shelf}setFound={setFound}/>
            <h3>{search}</h3>
            {found.map((chart)=> (
                <Post chart={chart} />
            ))}
        </div>
    )
}

export default Library