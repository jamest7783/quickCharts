import { Link } from 'react-router-dom'
import { useState } from 'react'
import Plot from './Plot'

const Create = (  ) => {

    const UserData = [
        {
            id: 1,
            year: 2016,
            userGain: 80000,
            userLost: 823
        },
        {
            id: 2,
            year: 2017,
            userGain: 60000,
            userLost: 523
        },
        {
            id: 3,
            year: 2018,
            userGain: 50000,
            userLost: 323
        },
        {
            id: 4,
            year: 2019,
            userGain: 110000,
            userLost: 123
        }
    ]


    const [ userData, setUserData ] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: "Users Gained",
            data: UserData.map((data) => data.userGain)
        }]
    })

    return (
        <div className='create'>
            <div className="form">
                <form>
                    <button>button</button>
                    <div className="input-data"> 
                        <input placeholder='bar chart'></input>
                        <input placeholder='title'></input>
                        <input placeholder='labels seperated by commas'></input>
                        <input placeholder='data seperated by commas'></input>
                    </div>
                </form>
            </div>
            <Plot chartData={ userData }/>
            <div className='footer-links'> 
                <Link to='/view'>View Plot Full-Screen</Link>
                <Link to='/'>back to Home</Link>
            </div>
        </div>
    )

}

export default Create