import { Tipo } from "../types/enums@types"
// -> utils
export default function viewConsole(tipo: Tipo):  void {
    switch (tipo) {
        case "Balrog":

            break
        case "Nazgûl":
            console.log("Frodo sente o Um Anel querendo retornar ao seu Mestre...")
            break
        case "Sociedade":

            break
    }
}

