import { Link } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS  } from 'chart.js/auto'
import { useNavigate } from 'react-router-dom'


const Post = ( { chart, setPost }  ) => {

    const { datasets, labels } = chart
    let data = { datasets: datasets,
                 labels: labels }
    const navigate = useNavigate()
    let viewPost=()=>{
        setPost( data )
        navigate('/viewpost')
    }


    return (
        <div>
            <div className='tile-header'>
                <button className='tile-view' onClick={(e)=>{viewPost()}}>view</button>
            </div>
            <div>
                <Bar data={data}/>
            </div>
        </div>
    )
}

export default Post 