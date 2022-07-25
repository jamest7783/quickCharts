const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const Comment = new Schema(
    {
        creator: [{ type: Schema.Types.ObjectId, ref: 'User', default: 'guest' }],
        comment: { type: String, required: true },
        likes:   [{ type: Schema.Types.ObjectId, ref: 'User', default: 'guest' }]
    },
    { 
        timestamps: true 
    }
)

module.exports = mongoose.model( 'Comment', Comment )

