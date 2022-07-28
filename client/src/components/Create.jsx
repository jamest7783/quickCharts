import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS  } from 'chart.js/auto'

const Create = ( { chart, setChart, user } ) => {

    async function getUserChart() {
        const res = await axios.get(`http://localhost:3001/charts/${user.charts[user.charts.length-1]}`)
        let barChart = res.data.barChart 
        console.log( 'BARCHART=',barChart ) 
        setChart( barChart )
    }
    useEffect(()=>{getUserChart()},[])

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
        const updateChartInBackend = await axios.put(`http://localhost:3001/update-chart/${user.charts[0]}`,tempChart)
        setChart( temp )
    }

    return (
        <div className='create-page'>
            <div className="input"> 
                <div className='set-title'>
                    <input type='text' className='title' placeholder='title' onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
                <div className='vals'>
                    <div className='xVals'>
                        {emptyXVals.map((item,index)=>(<input className='x'type="text"placeholder={`${xVals[index]}`} onChange={(e)=>onChange(e,index)}></input>))}
                    </div>
                    <div className='yVals'>
                        {emptyYVals.map((item,index)=>(<input className='y'type='text'placeholder={`${yVals[index]}`} onChange={(e)=>onChangeY(e,index)}></input>))}
                    </div>
                </div>
                <div id='save'>
                    <button onClick={saveChart}>Save</button>
                </div>
            </div>
            <div className='note-pad'>
                <Bar data={ temp }/>
                { user.name } 
            </div>
            <div className='footer-links'> 
                <Link to="/preview">~PREVIEW~</Link>
                <Link to='/'>~HOME~</Link>
                <Link to='/profile'>~PROFILE~</Link> 
            </div>
        </div>
    )
}

export default Create

