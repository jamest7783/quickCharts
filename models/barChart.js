const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const BarChart = new Schema(
    {
        creator: [{ type: Schema.Types.ObjectId, ref: 'User', default: 'guest' }],
        labels: { type: Array, required: true, default: [ 'x','x','x' ] },
        datasets: { type:Array,required:true,default:[{label:'',data:[1,2,3]}]},
        comments: [{ type: Schema.Types.ObjectId, ref: 'Comment', default: '' }],
        likes:    [{ type: Schema.Types.ObjectId, ref: 'User', default: 'guest' }]
    },
    { 
        timestamps: true 
    }
)

module.exports = mongoose.model( 'BarChart', BarChart )
