import { Link, useNavigate } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS  } from 'chart.js/auto'
 
const Preview = ({ chart, user }) => {

    const { datasets, labels } = chart 
    const data = {
        labels: labels,
        datasets: datasets
    }
    const navigate=useNavigate()
    let route=(path)=>{
        navigate(path)
    }

    return (
        <div className='preview-page'>
            <div className='preview-chart'>
                <Bar data={ data }/> 
            </div>
            <div id='preview-username'>
                { user.name }
            </div>
            <div className='back-create'>
                <button className='backEditHome' onClick={(e)=>{route('/create')}}>edit</button>
                <button className='backEditHome' onClick={(e)=>{route('/')}}>home</button>
            </div>
            </div>
    )
}

export default Preview