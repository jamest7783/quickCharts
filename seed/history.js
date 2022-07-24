const db = require( '../db' )
const History = require( '../models/history' )
db.on( 'error', console.error.bind( console, 'MongoDB Connection Error:' ))

const main = async (  ) => {

    const history = [ 
                      'chart', 
                      'chart1', 
                      'chart2'  
                    ] 
    await History.create( history )
    console.log( 'Created history' )

}

const run = async () => {
    await main()
    db.close()
}

run() 