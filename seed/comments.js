const db = require( '../db' )
const Comment = require( '../models/comment' )
db.on( 'error', console.error.bind( console, 'MongoDB Connection Error:' ))

const main = async (  ) => {

    const comments = [
        {
            // creator: { type: Schema.Types.ObjectId, ref: 'user_id' },
            comment: 'this is a comment'
        },
        {
            // creator: { type: Schema.Types.ObjectId, ref: 'user_id' },
            comment: 'this is a comment2'
        }

    ]
    await Comment.insertMany( comments )
    console.log( 'Created comments' )
}

const run = async () => {
    await main()
    db.close()
}

run() 