import { Tipo, Raca, Status } from "../types/enums@types";


export default class Personagem {
    private nome: string 
    private tipo: Tipo
    private raca: Raca
    private arma: string
    private status: Status



    constructor(nome: string, tipo: Tipo, raca: Raca, arma: string, status: Status) {
        this.nome = nome
        this.tipo = tipo
        this.raca = raca
        this.arma = arma
        this.status = status
    }

    public getNome(): string  {return this.nome}
    public setNome(nome: string): void {this.nome = nome}
    public getTipo(): Tipo {return this.tipo} 
    public setTipo(tipo: Tipo): void {this.tipo = tipo}
    public getRaca(): Raca {return this.raca}
    public setRaca(raca: Raca):void {this.raca  = raca}
    public getArma(): string {return this.arma}
    public setArma(arma: string): void {this.arma = arma}
    public getStatus(): Status {return this.status}
    public setStatus(status: Status): void {this.status = status}
}