import { Request, Response, NextFunction } from "express";
import viewConsole from "../utils/viewMessagesConsole";

export default function (req: Request, res: Response, next: NextFunction) {
    console.log(`[INFO] --> REQUISIÇÂO DO TIPO [${req.method}] --> HOST [${req.hostname}] --> DATA [${new Date()}]`)
    if (req.method === "POST") {if (req.body.tipo) viewConsole(req.body.tipo)}
    next()
}




