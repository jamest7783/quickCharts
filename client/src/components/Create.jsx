import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS  } from 'chart.js/auto'

const Create = ( { chart, setChart, name } ) => {

    async function newChart ( ) {
        let res = await axios.post('http://localhost:3001/create-chart')
        res.data.chart.datasets = [{
            label: 'bar chart',
            data: [0, 1 , 2]
        }]
        let labels = res.data.chart.labels
        let datasets = res.data.chart.datasets
    }
    useEffect( () => { 
        newChart( ) 
    },[ ])

    /* connecting to user generated chart created in last page, 
       setting it to 'chart' variable */
    //const [ chart, setChart ] = useState({})
    // let index = 0
    // async function chartConnect( ) {
    //     const res = await axios.get('http://localhost:3001/charts') 
    //     const index = res.data.barCharts.length
    //     setChart( res.data.barCharts[0] )
    //     console.log( "NEW=", res.data.barCharts[index-1] )
    //     return index
    // }
    // useEffect( () => { 
    //     chartConnect( ) 
    // },[ ])

    /* create temporary data-set for chart display, 
       will "onSave" .put -> user's chart in back-end */
    const [ title, setTitle ] = useState( chart.datasets[0].label )
    const [ xVals, setXVals ] = useState( chart.labels )
    const [ yVals, setYVals ] = useState( chart.datasets[0].data )
    let temp = {
        labels: xVals,  
        datasets: [{
            label: title,
            data: yVals }]
    }
    let emptyXVals = [...Array(xVals.length+1)]   
    let emptyYVals = [...Array(yVals.length+1)]
    let onChange = ( e, index ) => {
        let tempArr = [...xVals]
        tempArr.splice( index, 1, e.target.value )
        setXVals( tempArr )
    }
    let onChangeY = ( e, index ) => {
        let tempArrY = [...yVals]
        tempArrY.splice( index, 1, e.target.value )
        setYVals( tempArrY )
    }
    async function saveChart ( ) {
        let tempChart = {...chart}
        tempChart.labels = temp.labels
        tempChart.datasets = temp.datasets
        const res = await axios.put(`http://localhost:3001/update-chart/${tempChart._id}`,tempChart)
        setChart( temp )
    }

    return (
        <div className='create'>
            <div className="input-data"> 
                <input type='text' placeholder='title' onChange={(e)=>setTitle(e.target.value)}></input>
                {emptyXVals.map((item,index)=>(<input type="text"placeholder={`${xVals[index]}`} onChange={(e)=>onChange(e,index)}></input>))}
                {emptyYVals.map((item,index)=>(<input type='text'placeholder={`${yVals[index]}`} onChange={(e)=>onChangeY(e,index)}></input>))}
            </div>
            <div className="plot">
                <div>
                    <Bar data={temp}/>
                </div>
                <div>
                    <button onClick={saveChart}>Save</button>
                </div>
                <div>
                    { name }
                </div>
            </div>
            <div className='footer-links'> 
                <Link to="/view">View Plot Full-Screen</Link>
                <Link to='/'>back to Home</Link>
                <Link to='/profile'>   Back to Profile</Link> 
            </div>
        </div>
    )
}

export default Create

