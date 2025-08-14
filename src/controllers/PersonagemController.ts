import { Request, Response} from "express";
import checkParamns from "../utils/checkPersonagenParam";
import db from "../config/db"
import Personagem from "../model/Personagem";
import IPersonagem from "../Interfaces/IPersonagem";
import { Raca, Status, Tipo } from "../types/enums@types";


// type inputsToGet = {
//     params:  "nome" | "tipo" | "raca" | "status", 
//     value: string | Tipo | Raca | Status
// }

const PersonagemService = {
    create: async (data: Personagem) =>  {
        try {
            const sql = "insert into personagens (nome, tipo, raca, arma, status) values(?, ?, ?, ?, ?)"
            const [result, info] = await db.query(sql, [data.getNome(), data.getTipo(), data.getRaca(), data.getArma(), data.getStatus() ])
            return {data, result, info }
            
        }
        catch(e) {  
            throw e
        }
    },


    put: async (data: Partial<IPersonagem>, id: number) => {
        try {
            const keys: string[] = []
            const values: string[] = []

            Object.keys(data).forEach((v) => {
                if(v === "nome"  || v === "tipo" || v === "raca" || v === "arma" || v === "status" ) {
                    if(data[v]) {
                        keys.push(`${v} = ?`)
                        values.push(data[v])
                    }
                    
                }
            })


            const sql: string = `UPDATE personagens  SET ${keys.join(" , ") } WHERE id = ?`
            const [result, info] = await db.query(sql, [...values,  id])
            return {fields: keys, data: data, result, info}
        

        }
        catch(e) {
            throw e
        }
    },

    get: async () => {

        const sql = "SELECT * FROM personagens"
        const [rows]: any[] = await db.query(sql)

        return rows ?? []
    },


    getByUniqueKey: async (id: number) => {
        const [rows] = await db.query("SELECT * FROM personagens WHERE id = ?", [id]) ?? []
        return rows as Array<IPersonagem>
    }


}

export default class PersonagemController {
    public static async createPersonagem(req: Request, res: Response) {
        try {
            const {nome, raca, arma, tipo, status} = checkParamns(req)
            const  p = await PersonagemService.create(new Personagem(nome, tipo, raca ,arma, status))
            res.status(201).json({message: "Personagem criado com sucesso", data:p.data, result: p.result, info: p.info})
            



        }
        catch(e) {
            res.status(500).json({message: "Internal Error", err: e})
        }
    }

    public static async updatePersonagem(req: Request, res: Response) {
        try {
            const {nome, raca, arma, tipo, status} = req.body
            const obj: Partial<IPersonagem> = {arma, nome, raca, status, tipo}
            const isUpdated = await PersonagemService.put(obj, parseInt(req.params.id))
            res.status(200).json({ message: "Personagem editado com sucesso", ...isUpdated})
        }
        catch(e) {
            res.status(500).json({message: "Internal Error", err: e})
        }
    }

    public static async getPersonagens(req: Request, res: Response) {
        res.status(200).json(await PersonagemService.get())
    }

    public static async getPersonagem(req: Request, res: Response) {
        const data = await PersonagemService.getByUniqueKey(parseInt(req.params.id))
        
        if(data.length < 1) {res.status(404).json({message: "Data não encontrado"})
        return
        }  

        const typeP = data[0].tipo
        
        switch(typeP) {
            case "Sociedade":
                console.log("Corram seus tolos!")
            break
            case "Nazgûl":
                console.log("Os Nazgûl não estão em Moria.")
            break
            case "Balrog":
                console.log("Você não vai passar!")
            break
        }


        res.status(200).json({data: data})
    }

    public static async deletePersonagem(req: Request, res: Response) {
        try {
            const [result] = await db.query("DELETE FROM personagens WHERE id = ? ", req.params.id)
            res.status(200).json({message: "Personagem deletado com sucesso", result})
        }
        catch(e) {
            res.status(500).json({message: "Internal Error", error: e})
        }
    }
}