import express, { Application } from 'express'
import "dotenv/config"
import db from "../src/config/db"



const app: Application = express()




app.use(express.json())






const PORT = process.env.PORT ?? 8080



app.listen(PORT,  async (err) => {
    if(err) throw new Error("Error when listening port: " + PORT)
    console.log( (await db.getConnection()).threadId)
    console.log(`Running in http://localhost:${PORT}`)
})






