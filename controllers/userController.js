const User = require( '../models/user' )
 

const getUsers = async ( req, res ) => {
    try {
        const users = await User.find()
        return res.status( 200 ).json({ users })
    } catch ( error ) {
        return res.status( 500 ).json( "ERROR",error.messege )
    }
}
const createAccount=async(req,res)=>{
    try{
        const newAcct=await new User(req.body)
        await newAcct.save()
        return res.status( 201 ).json({newAcct})
    }catch(error){
        return res.status(500).json(error.message)
    }
}

const saveAccount = async ( req, res ) => {
    try {
        const { id } = req.params
        const account = await User.findByIdAndUpdate( id, 
                                                     req.body, 
                                                     { new: true })
        res.status( 200 ).json({ account })
    } catch ( error ) {
        return res.status( 500 ).send( error.message )
    }
}




module.exports = {
    getUsers,
    createAccount,
    saveAccount
}


 