import dotenv from "dotenv";
import connectdatabase from "./db/db.js";


dotenv.config();

connectdatabase().then(
    app.on("error",(error)=>
    {
        console.log(error);
    }
    ),

    app.listen(process.env.PORT||8000 , ()=>
    {   
        console.log(`listening on port no ${process.env.PORT}`)
    })
).catch((error)=>
{
    console.error("ERROR DETECTED",error)
})

