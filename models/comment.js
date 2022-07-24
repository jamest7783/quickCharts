const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const Comment = new Schema(
    {
        // creator: { type: Schema.Types.ObjectId, ref: 'user_id' },
        comment: { type: String, required: true }
    },
    { 
        timestamps: true 
    }
)

module.exports = mongoose.model( 'Comment', Comment )

