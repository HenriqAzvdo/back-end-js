import { Animal } from "./Animal"

export class Cavalo extends Animal{
    som(): void {
        console.log(`Relinchando`)
    }
    locomacao(): void {
        console.log(`Galopando`)
    }
}
