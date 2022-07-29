import { Link, useNavigate } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS  } from 'chart.js/auto'
 
const ViewPost = ( {post} ) => {

    const nav=useNavigate()
    let route=(path)=>{
        nav(path)
    }

    return (
        <div className='view-page'>
            <div className='post-container'>
                <Bar data={post}/>
            </div>
            <div className='viewpost-libhome'> 
                <button className='post-back' onClick={(e)=>{route('/')}}>home</button>
                <button className='post-back' onClick={(e)=>{route('/library')}}>back</button>
            </div>
        </div>
    )
}

export default ViewPost


