const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const BarChart = new Schema(
    {
        creator: [{ type: Schema.Types.ObjectId, ref: 'User', default: 'guest' }],
        labels: { type: Array, required: true, default: [ 'Jan','Feb','March' ] },
        datasets: [{
            label: { type: String, required: true, default: 'title' },
            data: { type: Array, required: true, default: [ 0,1,2 ] }
        }],
        comments: [{ type: Schema.Types.ObjectId, ref: 'Comment', default: '' }],
        likes:    [{ type: Schema.Types.ObjectId, ref: 'User', default: 'guest' }]
    },
    { 
        timestamps: true 
    }
)

module.exports = mongoose.model( 'BarChart', BarChart )
