import express, { Application } from 'express'
import "dotenv/config"




const app: Application = express()




app.use(express.json())






const PORT = process.env.PORT ?? 8080



app.listen(PORT,  (err) => {
    if(err) throw new Error("Error when listening port: " + PORT)
    console.log(`Running in http://localhost:${PORT}`)
})






