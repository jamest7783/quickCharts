import { Link, useNavigate } from 'react-router-dom' 
import { useState, useEffect } from 'react'
import axios from 'axios'
import { set } from 'mongoose'

  
const MakeUser = ( { user, setUser, name, setName, setChart, chart } ) => {

    let navigate = useNavigate()

    let goCreate = () => {
        navigate('/create')
    }
    async function newChart ( ) {
        let res=await axios.post('http://localhost:3001/create-chart')
        let blankChart=res.data.chart
        let tempUser={...user}
        tempUser.charts=[blankChart._id]
        setUser(tempUser)
        goCreate()
    }  

    const continueAsAnonymous=()=>{
        setUser({name:'anonymous',icon:''})
    }
    const makeProfile=(e)=>{
        setUser({name:e.target.value,icon:''})
    }

    return (
        <div>
            <h1>profile</h1>
            <form className='create-user' onSubmit={(e) => navigate('/create')}>
                <input type='text' placeholder={user.name} style={{ border:'none'}}
                onChange={(e)=> makeProfile(e)}></input>
            </form>
            <button onClick={(e) => continueAsAnonymous() }>continue as anonymous</button>
            <p>{ user.name }</p>
            <button onClick={(e)=>{newChart()}}>create new chart</button>
            <Link to='/'>~HOME~</Link>

        </div>
    )
}

export default MakeUser