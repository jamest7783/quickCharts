import { Link } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS  } from 'chart.js/auto'
 
const View = ({ chart, name }) => {

    const { datasets, labels } = chart 
    const data = {
        labels: labels,
        datasets: datasets
    }

    return (
        <div>
            <div>
                <Bar data={ data }/> 
            </div>
            <div>
                { name }
            </div>
            <Link to='/create'>back to Create </Link>
            <Link to='/'>back to Home</Link>
        </div>
    )
}

export default View