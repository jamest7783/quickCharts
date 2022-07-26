const db = require( '../db' )
const Chart = require( '../models/chart' )
db.on( 'error', console.error.bind( console, 'MongoDB Connection Error:' ))

const main = async (  ) => {
    Chart.collection.drop(  ) 

    const charts = [
        {
            title: 'newTitle',
            data:[
                    {
                        id: 1,
                        year: 2016,
                        userGain: 80000,
                        userLost: 823
                    },
                    {
                        id: 1,
                        year: 2016,
                        userGain: 80000,
                        userLost: 823
                    },
                    {
                        id: 1,
                        year: 2016,
                        userGain: 80000,
                        userLost: 823
                    },
                    {
                        id: 1,
                        year: 2016,
                        userGain: 80000,
                        userLost: 823
                    },
                    {
                        id: 1,
                        year: 2016,
                        userGain: 80000,
                        userLost: 823
                    }
                ],
            axis: {
                xLabel: 'xLabel_Name',
                yLabel: 'yLabel_Name'
            },
        },
        {
            title: 'James',
            data: [ ['x','y'], [ 'x','y'] ],
            axis: {
                xLabel: 'x2Label_Name',
                yLabel: 'y2Label_Name'
            },
        }
    ]
    await Chart.insertMany( charts )
    console.log( 'Created charts' )
}

const run = async () => {
    await main()
    db.close()
}

run() 