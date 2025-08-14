import { Tipo, Raca, Status } from "../types/enums@types"


export default function checkParamns(object: any): {nome: string, tipo: Tipo, raca: Raca, arma: string, status: Status} {
    const { nome, tipo, raca, arma, status } = object.body
    if (!nome || !tipo || !raca || !arma || !status) throw new Error("Dados Invalidos")
    return { nome, tipo, raca, arma, status }
}