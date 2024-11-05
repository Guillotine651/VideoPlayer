import dotenv from "dotenv";
import connectdatabase from "./db/db.js";
import app from './app.js';

dotenv.config();

connectdatabase().then(
    app.on("error",(error)=>
    {
        console.log(error);
    }
    ),

    app.listen(process.env.PORT||4002 , ()=>
    {   
        console.log(`listening on port no ${process.env.PORT}`)
    })
).catch((error)=>
{
    console.error("ERROR DETECTED",error)
})

