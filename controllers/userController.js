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

module.exports = {
    getUsers,
    createAccount
}


 