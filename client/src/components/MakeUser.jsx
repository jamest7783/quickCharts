import { Link, useNavigate } from 'react-router-dom' 
import { useState, useEffect } from 'react'
import axios from 'axios'
import { set } from 'mongoose'

  
const MakeUser = ( { user, setUser } ) => {

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
        navigate('/create')
    }
    const makeProfile=(e)=>{
        setUser({name:e.target.value,icon:''})
    }

    const goHome=()=>{
        navigate('/')
    }

    return (
        <div className='profile'>
            <div className='make-profile'>
                <form className='create-user' onSubmit={(e) => navigate('/create')}>
                    <div id='skip'>
                        <button className='profile-link'onClick={(e) => continueAsAnonymous() }>skip</button>
                    </div>
                </form>
                <div> 
                <input className='user-field'type='text' placeholder='  enter user name' 
                    onChange={(e)=> makeProfile(e)}></input>
                    <button className='username' onClick={(e)=>{newChart()}}>create new chart</button>
                    <button className='go-home'onClick={(e)=>{goHome()}}>home</button>
                </div>
            </div>
        </div>
    )
}

export default MakeUser