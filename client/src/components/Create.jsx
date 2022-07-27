import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS  } from 'chart.js/auto'

const Create = ( ) => {

    /* connecting to user generated chart created in last page, 
       setting it to 'chart' variable */
    const [ chart, setChart ] = useState({})
    async function chartConnect( ) {
        const res = await axios.get('http://localhost:3001/charts')
        setChart( res.data.barCharts[0])
    }
    useEffect( () => { 
        chartConnect( ) 
    },[ ])
    
    /* create temporary data-set for chart display, 
       will "onSave" .put -> user's chart in back-end */
    const [ title, setTitle ] = useState( 'title' )
    const [ xVals, setXVals ] = useState( [] )
    const [ yVals, setYVals ] = useState( [] )
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
        
    return (
        <div className='create'>
            <div className="input-data"> 
                {emptyXVals.map((item,index)=>(<input type="text"placeholder="x value"onChange={(e)=>onChange(e,index)}></input>   ))}
                {emptyYVals.map((item,index)=>(<input type='text'placeholder='y value'onChange={(e)=>onChangeY(e,index)}></input>))}
            </div>
            <div className="plot">
                <div>
                    <Bar data={ temp }/>
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



    //const [ coors, setCoors ] = useState([ ['Jan',0],['Feb',1],['March',2] ])
    // const [ temp, setTemp ] = useState({})
    // const [ data, setData ] = useState({
    //     labels: [],
    //     datasets: [{
    //         label: '',
    //         data: []
    //     }]
    // })
    // const [count, setCount] = useState(0);
    // const [count2, setCount2] = useState(0);
    // const [title, setTitle] = useState('');
    // const UserData = [
    //     {
    //         id: 1,
    //         year: 2016,
    //         userGain: 80000,
    //         userLost: 823
    //     },
    //     {
    //         id: 2,
    //         year: 2017,
    //         userGain: 60000,
    //         userLost: 523
    //     },
    //     {
    //         id: 3,
    //         year: 2018,
    //         userGain: 50000,
    //         userLost: 323
    //     },
    //     {
    //         id: 4,
    //         year: 2019,
    //         userGain: 110000,
    //         userLost: 123
    //     }
    // ]


    // const [ userData, setUserData ] = useState({
    //     labels: UserData.map((data) => data.year),
    //     datasets: [{
    //         label: "this is the title",
    //        data: UserData.map((data) => data.userGain)
    //     }]
    // })

    // const [ chartData, setChartData ] = useState({
    //     labels: [],
    //     datasets: [{
    //         label: 'title',
    //         data: []
    //     }]
    // })
   
    // const handleClick = ( e  ) => {
    //     e.preventDefault()

    //     setData( { datasets.label : title } )
    //     setCount(count+1)
    // }

    // function handleChange( e )  {
    //     setTitle({
    //         ...data,
    //         [e.target.name]: e.target.value
    //         });
    //     }

    // useEffect( () => {
    //     console.log("Effective useEffect",  count)
    //     setChartData( {
    //         labels: [ jan, feb, marhc],
    //         datasets: [{
    //             label: 'title',
    //             data: [50, 60, 40]
    //         }]
    //     })
    // },[  count, count2 ])

    // const updateChart = () => {
    //     setChart(chartdata )
    //  }
