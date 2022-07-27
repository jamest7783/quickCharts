import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS  } from 'chart.js/auto'
const Plot = ({ chartData }) => {

    return (

        <div className="plot">
            <h3>plot...</h3>
            <div>
                <Bar data={ chartData }/>
            </div>
        </div>
    )

}

export default Plot