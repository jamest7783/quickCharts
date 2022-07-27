const db = require( '../db' )
const BarChart = require( '../models/barChart' )
db.on( 'error', console.error.bind( console, 'MongoDB Connection Error:' ))

const main = async (  ) => {
    
    BarChart.collection.drop( )
    const barChart =
        [{
            labels: [ 'Jan','Feb','March','April' ],
            datasets: [{
                label: 'title' ,
                data: [ 0,1,2,3 ] 
            }]
        }]
    await BarChart.insertMany( barChart ) 
    console.log( 'Created a BarChart' )

}

const run = async () => {
    await main()
    db.close()
}

run() 