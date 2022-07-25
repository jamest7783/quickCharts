const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const History = new Schema(
    {
        charts: [{ type: Schema.Types.ObjectId, ref: 'Chart', default: null }]
    },
    { 
        timestamps: true 
    }
)

module.exports = mongoose.model( 'History', History )

