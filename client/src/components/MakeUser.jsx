import { Link, useNavigate } from 'react-router-dom' 
import { useState, useEffect } from 'react'
import axios from 'axios'
import { set } from 'mongoose'

/*
1. scroll profiles 
2. click on profiles || make new account
3. if made new account -> save
4. choose chart from account charts array
5. go to build 
*/

  
const MakeUser = ( { user, setUser, setChart } ) => {

    let [accounts,setAccounts]=useState([])
    
    async function roster(){
        let res=await axios.get('/community')  
        setAccounts(res.data.users)
    }
 
    useEffect(()=>{roster()},[])

    let navigate = useNavigate()

    let goCreate = () => {
        navigate('/create')
    }
    async function newChart ( ) {
        let res=await axios.post('/create-chart')

        let tempUser={...user}
        let blankChart=res.data.chart
        tempUser.charts=[blankChart._id]
        setUser(tempUser)
        goCreate()
    }  

    async function newAcct(){
        let res =await axios.post('new-account' )
        setUser(res.data.newAcct)
        console.log("new account....",user)
        document.getElementById("user-field").value="" 
    }

    const continueAsAnonymous=()=>{
        setUser({name:'anonymous',icon:''})
        navigate('/create')
    }

    async function saveAcct(){
        let res=await axios.put(`save-account/${user._id}`,user)
        roster()
        console.log("Saved account..... ",res.data.account)
    }

    const setName=(e)=>{
        let temp = {...user}
        temp.name=e.target.value
        setUser(temp)
    }
    const goHome=()=>{
        navigate('/')
    }

    const chooseAcctTile=(tile)=>{
        console.log(tile)
        setUser(tile)
    }

    return (
        <div className='profile'>
            <div className='accounts'>
                {accounts.map((acct)=>(
                    <div className='account-tile'>{acct.name}
                        <button onClick={(e)=>{chooseAcctTile(acct)}}>chose</button>
                    </div>
                    ))}
            </div>
            <div className='make-profile'>
                <form className='create-user' onSubmit={(e) => navigate('/create')}>
                    <div id='skip'>
                        <button className='profile-link'onClick={(e) => continueAsAnonymous() }>skip</button>
                    </div>
                </form>
                <div> 
                <h3 id="create-profile">create profile</h3>
                <input id="user-field" type='text' placeholder=' guest' 
                    onChange={(e)=> setName(e)}></input>
                    <button className='username' onClick={(e)=>{newChart()}}>create new chart</button>
                    <button className='go-home'onClick={(e)=>{goHome()}}>home</button>
                    <button onClick={(e)=>{newAcct()}}>newAcct</button>
                    <button onClick={(e)=>{saveAcct()}}>saveAcct</button>
                    <button onClick={(e)=>{navigate('/create')}}>go to create</button>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default MakeUser