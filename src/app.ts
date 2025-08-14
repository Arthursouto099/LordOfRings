import express, { Application, Request, Response } from 'express'
import "dotenv/config"
import db from "../src/config/db"
import checkChacacter from './middlewares/checkChacacter'
import router from './routes/router'


const app: Application = express()




app.use(express.json())
app.use(checkChacacter)
app.use("/api/v1", router)


app.use((req: Request, res: Response) => {
    res.status(404).json({ "erro": "A passagem de Caradhras está fechada por Saruman. Esta rota não existe para nós. Só nos sobrou...Moria." })
})


const PORT = process.env.PORT ?? 8080



app.listen(PORT,  async (err) => {
    if(err) throw new Error("Error when listening port: " + PORT)
    console.log( (await db.getConnection()).threadId)
    console.log(`Running in http://localhost:${PORT}`)
})






