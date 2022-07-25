const Chart = require( '../models/chart' )

const getCharts = async ( req, res ) => {
    try {
        const charts = await Chart.find()
        return res.status( 200 ).json({ charts })
    } catch ( error ) {
        return res.status( 500 ).json( error.messege )
    }
}

const findChart = async ( req, res ) => {
    try {
        const { id } = req.params                //how does id get to the router
        const chart = await Chart.findById( id )
        return res.status( 200 ).json({ chart })
    } catch ( error ) {
        return res.status( 500 ).json( error.messege )
    }
}

const createChart = async ( req, res ) => {
    try {
        const chart = await new Chart( req.body ) //what is req.body? from form?
        await chart.save( )
        return res.status( 201 ).json({
            chart
        })
    } catch ( error ) {
        return res.status( 500 ).json( error.message )        
    }
}

const deleteChart = async ( req, res ) => {
    try {
        const { id } = req.params
        const deleted = await Chart.findByIdAndDelete( id )
        if ( deleted ) {
            return res.status( 200 ).send( `Chart with id:${ id } deleted` )
        }
        throw new Error( `Chart with id:${ id } not found` )
    } catch ( error ) {
        return res.status( 500 ).json( error.message )
    }
}

const updateChart = async ( req, res ) => {
    try {
        const { id } = req.params
        const chart = await Chart.findByIdAndUpdate( id, 
                                                     req.body, 
                                                     { new: true })
        res.status( 200 ).json( chart )
    } catch ( error ) {
        return res.status( 500 ).send( error.message )
    }
}

module.exports = {
    getCharts,
    findChart,
    createChart,
    updateChart,
    deleteChart
}