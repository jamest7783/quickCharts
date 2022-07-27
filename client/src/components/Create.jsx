import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Plot from './Plot'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS  } from 'chart.js/auto'
import UserData from './Data.js'

const Create = (  ) => {


    const [ chart, setChart ] = useState('')

    const updateTitle = async ( e ) => {
        e.preventDefault() 
    }

    useEffect( ( ) => {
        async function chartConnect (  ) {
            const res = await axios.get('http://localhost:3001/charts')
            setChart( res.data.charts[0] )
        } chartConnect( )
    },[ ] )

    const { data } = chart
    console.log( "Data to send to Bar",data)





    const [ userData, setUserData ] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: chart.title,
            data: UserData.map((data) => data.userGain)
        }]
    })

    

    
     


    return (
        <div className='create'>
            <div className="form">
                    <div className="input-data"> 
                        <form onSubmit={ updateTitle }> 
                            <input type="text"
                                    name="search"
                                    placeholder="title"
                                    onChange={ ( e ) => {
                                        console.log( e.target.value )
                                        userData.datasets[0].label = e.target.value 
                                        console.log( "userData",userData.datasets[0].label )
                                        setUserData( {...userData} )
                                        //title = e.target.value  
                                    }}></input>
                            <button type='submit'>change title</button>
                        </form> 
                        <form> 
                            <input placeholder='input x, y pair'></input>
                            <button type='Submit'>add data</button>
                        </form>
                    </div>
            </div>
            <div className="plot">
                <h3>plot...</h3>
                <div>
                    <Bar data={ userData }/>
                </div>
            </div>
            <div className='footer-links'> 
                <Link to='/view'>View Plot Full-Screen</Link>
                <Link to='/'>back to Home</Link>
            </div>
        </div>
    )

}

export default Create


 