const db = require( '../db' )
const User = require( '../models/user' )
db.on( 'error', console.error.bind( console, 'MongoDB Connection Error:' ))

const main = async (  ) => {
    User.collection.drop(  )

    const users = [
        {
            name: 'name',
            icon: ['stashed icon', 'stashed icon2'],
            charts:[]
        }
    ]
    await User.insertMany( users )
    console.log( 'Created users' )
}

const run = async () => {
    await main()
    db.close()
}

run() 