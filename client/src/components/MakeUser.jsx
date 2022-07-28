import { Link, useNavigate } from 'react-router-dom' 
import { useState, useEffect } from 'react'
import axios from 'axios'

  
const MakeUser = ( { user, setUser, name, setName, setCharts, charts, setChart } ) => {

    
    let navigate = useNavigate()
    const [ icon, setIcon ] = useState(user.icon)

    async function newChart ( ) {
        let res = await axios.post('http://localhost:3001/create-chart')
        async function appendChart( ) {
            console.log(res)
            //let newArr = {...charts,res}
            //setCharts( newArr )
        }
        appendChart()
    }   

    return (
        <div>
            <h1>profile</h1>
            <form className='create-user' onSubmit={(e) => navigate('/create')}>
                <input type='text' placeholder='username' style={{ border:'none'}}
                onChange={(e)=> {setName(e.target.value)}}></input>
            </form>
            <button onClick={(e) => navigate('/create') }>continue as anonymous</button>
            <p>{ name }</p>
            <button onClick={(e)=>{newChart()}}>create new chart</button>



            <Link to='/create' style={{ lineDecoration: 'none' }}>go</Link>
            <Link to='/'>HOME</Link>

        </div>
    )
}

export default MakeUser