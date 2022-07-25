const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const Chart = new Schema(
    {
        title:    { type: String, required: true },
        data:     { type: Array, required: true },
        axis:     { type: Object, required: true },
        creator:  [{ type: Schema.Types.ObjectId, ref: 'User', default: 'guest' }],
        comments: [{ type: Schema.Types.ObjectId, ref: 'Comment', default: '' }],
        likes:    [{ type: Schema.Types.ObjectId, ref: 'User', default: 'guest' }]
    },
    { 
        timestamps: true 
    }
)

module.exports = mongoose.model( 'Chart', Chart )


