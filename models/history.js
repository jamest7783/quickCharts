const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const History = new Schema(
    {
        charts: { type: Array, required: true }
    },
    { 
        timestamps: true 
    }
)

module.exports = mongoose.model( 'History', History )

