import { Tipo, Raca ,Status } from "../types/enums@types"

export default interface IPersonagem {         
    nome: string 
    tipo: Tipo
    raca: Raca
    arma: string
    status: Status
        
}