const prompt = require("prompt-sync")()
//No terminal: npm i prompt-sync
    /*
    2 - Faça um programa em que o usuário digite o diâmetro de um círculo e calcule a área e o perímetro dele
     */

    const pi = 3.14159

    let diametro = Number(prompt("Diâmetro do círculo: ")) 
    let area = pi * Math.pow(diametro/2,2)
    let perimetro = 2 * pi * (diametro/2)

    console.log(`${area.toFixed(2)} cm²`)
    console.log(`${perimetro.toFixed(2)} cm`)
    
   