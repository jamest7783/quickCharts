const db = require( '../db' )
const BarChart = require( '../models/barChart' )
db.on( 'error', console.error.bind( console, 'MongoDB Connection Error:' ))

const main = async (  ) => {
    
    BarChart.collection.drop( )
    const barChart =
        [{
            labels: [ 'Jan','Feb','March','April' ],
            datasets: [{
                label: 'Title' ,
                data: [ 0,1,3,2 ] 
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