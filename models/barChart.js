const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const BarChart = new Schema(
    {
        creator: [{ type: Schema.Types.ObjectId, ref: 'User', default: 'guest' }],
        labels: { type: Array, required: true, default: [ 'x-value','x-value','x-value' ] },
        datasets: { type:Array,required:true,default:[{label:'Title',data:[0.5,1.75,1]}]},
        comments: [{ type: Schema.Types.ObjectId, ref: 'Comment', default: '' }],
        likes:    [{ type: Schema.Types.ObjectId, ref: 'User', default: 'guest' }]
    },
    { 
        timestamps: true 
    }
)

module.exports = mongoose.model( 'BarChart', BarChart )
