const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: { type: String, required: true, default:"guest" },
        icon: { type: String, required: true, default:'icon image path' },
        charts: { type: Array, required:true, default: [{
            labels:['a','b','c'],
            datasets: [{label:'new-data',data:[1,2,3]}],
            comments:[''],
            likes:[0,0]
        }]}
    },
    { 
        timestamps: true 
    }
)

module.exports = mongoose.model( 'User', User )

