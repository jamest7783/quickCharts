const Chart = require( '../models/chart' )

const getCharts = async ( req, res ) => {
    try {
        const charts = await Chart.find()
        return res.status( 200 ).json({ charts })
    } catch ( error ) {
        return res.status( 500 ).json( error.messege )
    }
}

const viewChart = async ( req, res ) => {
    try {
        const { id } = req.params                
        const chart = await Chart.findById( id )
        return res.status( 200 ).json({ chart })
    } catch ( error ) {
        return res.status( 500 ).json( error.messege )
    }
}

const createChart = async ( req, res ) => {
    try {
        const chart = await new Chart( req.body )  
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

const findChart = async ( req, res ) => {
    try {
        const { input } = req.body               
        const chart = await Chart.find({ $or:[{ title: input },
                                              { title: input },
                                              { title: input }]})
        res.status( 200 ).json( chart )
    } catch ( error ) {
        return res.status( 500 ).send( error.message )
    }
    

}

module.exports = {
    getCharts,
    viewChart,
    createChart,
    updateChart,
    deleteChart,
    findChart
}