import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS  } from 'chart.js/auto'

const Create = ( { chart, setChart, user } ) => {

    //console.log('This is the chart here ----> ',user)

    const navigate = useNavigate()
    const route=(path)=>{
        navigate(path)
    }
    
    async function getUserChart() {
        const res = await axios.get(`/charts/${user.charts[user.charts.length-1]}`)
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
        const updateChartInBackend = await axios.put(`/update-chart/${user.charts[0]}`,tempChart)
        setChart( temp )
    }
    const returnDefaultX=(index)=>{
        let placeholder 
        `${xVals[index]}`==='undefined' ? placeholder='x' : placeholder=`${xVals[index]}`
        return placeholder
    }
    const returnDefaultY=(index)=>{
        let placeholder 
        `${yVals[index]}`==='undefined' ? placeholder='y' : placeholder=`${yVals[index]}`
        return placeholder
    }

    return (
        <div className='create-page'>

        <div className='pad'>

            <div className="input"> 
                <div className='set-title'>
                    <input type='text' className='title' placeholder={chart.datasets[0].label} onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
                <div className='values-container'>
                    <div className='vals'>
                        <div className='xVals'>
                            <div className='title-x'>x</div>
                            {emptyXVals.map((item,index)=>(<input className='x'type="text"placeholder={returnDefaultX(index)} onChange={(e)=>onChange(e,index)}></input>))}
                        </div>
                        <div className='yVals'>
                            <div className='title-x'>y</div>
                            {emptyYVals.map((item,index)=>(<input className='y'type='text'placeholder={returnDefaultY(index)} onChange={(e)=>onChangeY(e,index)}></input>))}
                        </div>
                    </div>
                </div>
                <div id='save'>
                    <button className='save' onClick={saveChart}>save data set</button>
                </div>
            </div>
            <div className='note-pad'>
            <div className='create-links'> 
                <div className='link' id='name'>{ user.name }</div>
                <button className='link' onClick={(e)=>{route('/')}}>home</button>
                <button className='link' onClick={(e)=>{route('/preview')}}>preview</button>
                <button className='link' onClick={(e)=>{route('/profile')}}>profile</button>
            </div>
                <div className='bar'> 
                    <Bar  id='canvas' data={ temp } />
                </div>

            </div>
        
        </div>
        </div>
    )
}

export default Create

