import { Animal } from "./Animal"

export class Cachorro extends Animal{
    som(): void {
        console.log(`Au au`)
    }
    locomacao(): void {
        console.log(`Correndo`)
    }
}

