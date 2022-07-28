import { Link } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS  } from 'chart.js/auto'

const Post = ( chart={ chart }  ) => {

    const { datasets, labels } = chart.chart 
    //console.log( datasets, labels )
    let data = { datasets: datasets,
                 labels: labels }
    


    return (
        <div>
            <Link to='/view'>view chart</Link>
            <Bar data={data}/>
        </div>
    )
}

export default Post 