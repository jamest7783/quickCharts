import { Link } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS  } from 'chart.js/auto'
 
const View = ({ chart }) => {

    const { datasets, labels } = chart 
    const data = {
        labels: labels,
        datasets: datasets
    }

    return (
        <div>
            <h1>viewing single Post (post) full-screen</h1>
            <h4>comment</h4>
            <div>
                <Bar data={ data }/> 
            </div>
            <Link to='/library'>back to Library </Link>
            <Link to='/create'>back to Create </Link>
            <Link to='/'>back to Home</Link>
        </div>
    )
}

export default View