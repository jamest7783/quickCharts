import { Link } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS  } from 'chart.js/auto'
 
const ViewPost = ( {post} ) => {

    return (
        <div>
            <div>
                <Bar data={post}/>
            </div>
            <div> 
                <Link to='/library'>~LIRBRARY~</Link>
                <Link to='/'>~HOME~</Link>
            </div>
        </div>
    )
}

export default ViewPost