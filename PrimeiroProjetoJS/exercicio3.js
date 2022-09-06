const prompt = require("prompt-sync")()
   /*
    1- Informar todos os números de 1000 a 1999 que quando divididos por 11
obtemos resto = 5. (FOR)
     */

for(let i = 1000; i < 1999; i++) {
    var resto = i % 11
    if (resto == 5) {
        console.log(i)
    }
}
