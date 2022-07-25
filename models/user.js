const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: { type: String, required: true },
        icon: { type: Array, required: true },
        charts: [{ type: Schema.Types.ObjectId, ref: 'Chart', default: null }]
    },
    { 
        timestamps: true 
    }
)

module.exports = mongoose.model( 'User', User )