const { Router } = require('express')
const router = Router( )
const Chart = require( '../models/chart.js' )

router.get( '/charts', async ( req, res ) => {
    const charts = await Chart.find( ) 
    res.json( charts )
})

// router.get( '/view/:id', async ( req, res ) => {
//     const { id } = req.params
//     const chart = await Chart.findById( id )
//     res.json( chart )
// })

 

 
module.exports = router;