const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: { type: String, required: true },
        icon: { type: Array, required: true },
        charts: { type: Array, required: true }
    },
    { 
        timestamps: true 
    }
)

module.exports = mongoose.model( 'User', User )