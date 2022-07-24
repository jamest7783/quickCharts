const mongoose = require( 'mongoose' )

mongoose.connect( 'mongodb://127.0.0.1:27017/dataDb'.then( ( ) => {
    console.log( 'Successfully connected to MongoDB' )
})).catch( ( e ) => {
    console.log( 'Connection Error', e.message ) 
})

module.exports = db 