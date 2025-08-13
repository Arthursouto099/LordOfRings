import sqlConn from "mysql2/promise";
import "dotenv/config"



const db = sqlConn.createPool({
     host: process.env.DB_HOST,
     user: process.env.DB_USER,
     database: process.env.DB_NAME,
     password: process.env.DB_PASSWORD
}) 


export default db