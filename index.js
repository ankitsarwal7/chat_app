import dotenv from "dotenv";
dotenv.config(); // Make sure this is called at the top
 

import express from "express"
import cors from "cors"
import connectDB from "./confiq/connectDB.js"
import router from "./routes/route.js"
import cookieParser from "cookie-parser";


const app = express()
 app.use(cors ({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))



app.use(express.json())
app.use(cookieParser())



const PORT = process.env.PORT || 8080

app.get('/' , (req, res) => {
    res.json({
        message: "server running at" + PORT
    })
})

//api enpoint

app.use('/api', router)






connectDB().then(() => {
    app.listen(PORT,() =>{
        console.log("server running at" + PORT);
        
    })
})
