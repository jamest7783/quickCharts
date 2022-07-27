import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Plot from './Plot'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS  } from 'chart.js/auto'
import e from 'cors'
//import UserData from './Data.js'

const Create = (  ) => {


    const [ chart, setChart ] = useState({})
    useEffect( ( ) => {
        async function chartConnect (  ) {
            const res = await axios.get('http://localhost:3001/charts')
            setChart( res.data.charts[0] )
        } chartConnect( )
    },[ ] )

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [title, setTitle] = useState('');


    const UserData = [
        {
            id: 1,
            year: 2016,
            userGain: 80000,
            userLost: 823
        },
        {
            id: 2,
            year: 2017,
            userGain: 60000,
            userLost: 523
        },
        {
            id: 3,
            year: 2018,
            userGain: 50000,
            userLost: 323
        },
        {
            id: 4,
            year: 2019,
            userGain: 110000,
            userLost: 123
        }
    ]


    const [ userData, setUserData ] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: "this is the title",
           data: UserData.map((data) => data.userGain)
        }]
    })

    const [ chartData, setChartData ] = useState({
        labels: [],
        datasets: [{
            label: '',
            data: []
        }]
    })

   
    
    const updateChart = ( e ) => {
        e.preventDefault()
    }


    

    
    const handleClick = ( e  ) => {
        console.log(e.target.value)
        setCount(count+1)
        e.preventDefault()
    }


    useEffect( () => {
        console.log("Effective useEffect",  count)
        setChartData( {
            labels: [],
            datasets: [{
                label: title,
                data: []
            }]
        })
    },[  count, count2 ])

    


    return (
        <div className='create'>
            <div className="form">
                    <div className="input-data"> 
                        <form onSubmit={ handleClick }> 
                            <input type="text"
                                    name="search"
                                    placeholder="title"
                                    onChange={ ( e ) => {
                                        
                                        setTitle( e.target.value ) 
                                        //z.datasets[0].label = e.target.value
                                        userData.datasets[0].label = e.target.value
                                        setUserData( {...userData} )}}
                                        // console.log( "userData=",userData )
                                    //}}
                                    ></input>
                            <button type='submit'>change title</button>
                        </form> 
                        <form> 
                        <input type="text"
                                    name="search"
                                    placeholder="x,y pair"
                                     
                                  
                                         
                                    ></input>
                            <button type='Submit'>add data</button>
                        </form>
                    </div>
            </div>
            <div className="plot">
                <h3>plot...</h3>
                <div>
                    <Bar data={ chartData }/>
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


 