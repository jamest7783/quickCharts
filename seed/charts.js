const db = require( '../db' )
const Chart = require( '../models/chart' )
db.on( 'error', console.error.bind( console, 'MongoDB Connection Error:' ))

const main = async (  ) => {
    Chart.collection.drop(  ) 

    const charts = [
        {
            title: 'this is a title',
            data: [ ['x','y'], [ 'x','y'] ],
            axis: {
                xLabel: 'xLabel Name',
                yLabel: 'yLabel Name'
            },
        },
        {
            title: 'this is a title2',
            data: [ ['x','y'], [ 'x','y'] ],
            axis: {
                xLabel: 'x2Label Name',
                yLabel: 'y2Label Name'
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