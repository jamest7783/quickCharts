import Search from "./Search"
 
import { Link, useNavigate } from 'react-router-dom'
import Post from './Post'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Library = ({ search, setSearch, charts, found, setFound, setChart, post, setPost }) => {

    let [ shelf, setShelf ] = useState([])
    const nav=useNavigate()
    const route=(path)=>{
        nav(path)
    }
 
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
        <div id='library'>
            <div id="lib-header">
                <div id='search-library'>
                    <Search search={search}setSearch={setSearch}charts={charts}shelf={shelf}setFound={setFound}/>
                    <button id='lib-home' onClick={(e)=>{route('/')}}>home</button>
                </div>
            </div>
            <div id='feed'>
                {found.map((chart)=> (
                    <div id="single-post"> 
                        <Post chart={chart} setChart={setChart} post={post} setPost={setPost} />
                    </div> 
                ))}
            </div>
        </div>
    )
}

export default Library