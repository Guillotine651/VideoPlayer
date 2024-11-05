import requesthandler from "../utils/requesthandler.js";


const registerUser=requesthandler(async (req,res)=>{
    res.status(200).json({
        message:"ok"
    })
} )
export {registerUser}