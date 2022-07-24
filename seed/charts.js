const db = require( '../db' )
const Chart = require( '../models/chart' )
db.on( 'error', console.error.bind( console, 'MongoDB Connection Error:' ))

const main = async (  ) => {

    const charts = [
        {
            //creator_id: { type: Schema.Types.ObjectId, ref: 'user_id' },
            title: 'this is a title',
            data: [ ['x','y'], [ 'x','y'] ],
            axis: {
                xLabel: 'xLabel Name',
                yLabel: 'yLabel Name'
            },
            //type: { type: Schema.Types.ObjectId, ref: 'type_id' },
            likes: ['like1','like2'],
            comments: ['comment1','comment2']

        },
        {
            //creator_id: { type: Schema.Types.ObjectId, ref: 'user_id' },
            title: 'this is a title2',
            data: [ ['x','y'], [ 'x','y'] ],
            axis: {
                xLabel: 'x2Label Name',
                yLabel: 'y2Label Name'
            },
            //type: { type: Schema.Types.ObjectId, ref: 'type_id' },
            likes: ['like12','like22'],
            comments: ['comment12','comment22']

        }

    ]
    await Chart.insertMany( charts )
    console.log( 'Created charts' )
}

const run = async () => {
    await main()
    db.close()
}

run() 