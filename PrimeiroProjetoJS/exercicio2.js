const prompt = require("prompt-sync")()
        /*
        3- Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de
21 anos. Total de pessoas com mais de 50 anos. O programa termina quando
idade for =-99. (WHILE)
         */

let idade = 0;
let contaJovem = 0;
let contaIdoso = 0;

while (idade != -99) {

    idade = Number(prompt("Idade: ")) 

  if (idade != -99) {
        if (idade < 20) {
            contaJovem++;

        } else if (idade > 50) {
            contaIdoso++;
        }
   }

}
console.log(`Total de pessoas idosas: ${contaIdoso}`);
console.log(`Total de pessoas jovens: ${contaJovem}`);
