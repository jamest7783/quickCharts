import { Link, useResolvedPath } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS  } from 'chart.js/auto'
 
const Preview = ({ chart, user }) => {

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
                { user.name }
            </div>
            <Link to='/create'>back to Create </Link>
            <Link to='/'>back to Home</Link>
        </div>
    )
}

export default Preview