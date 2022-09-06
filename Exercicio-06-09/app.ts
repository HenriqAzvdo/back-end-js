import { Cachorro } from "./Cachorro"
import { Cavalo } from "./Cavalo"
import { Preguica } from "./Preguica"


    let cachorro = new Cachorro(
        "Marley",
        3
    )

    let cavalo = new Cavalo(
        "Alípio",
        1
    )

    let preguica = new Preguica(
        "Flash",
        4
    )

    
    cachorro.locomacao()
    cavalo.locomacao()
    preguica.locomacao()
