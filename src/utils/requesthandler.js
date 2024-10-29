
const requesthandler=(fn)=>async(req,res,next)=>{
    try {
        await fn(req,res,next)
        
    } catch (error) {
        res.status(error.code||500).json({
            success:false,
            messsage:err.messsage
        })
        
    }
}

export default requesthandler