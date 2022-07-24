const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const Chart = new Schema(
    {
        // creator_id: { type: Schema.Types.ObjectId, ref: 'user_id' },
        title: { type: String, required: true },
        data: { type: Array, required: true },
        axis: { type: Object, required: true },
        // type: { type: Schema.Types.ObjectId, ref: 'type_id' },
        likes: { type: Array, required: true },
        comments: { type: Array, required: true }
    },
    { 
        timestamps: true 
    }
)

module.exports = mongoose.model( 'Chart', Chart )


