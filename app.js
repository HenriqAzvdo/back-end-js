const prompt = require("prompt-sync")()
//No terminal: npm i prompt-sync
//Output
//console.log("Olá mundo")

//Exemplo de um código em javascript
console.log("***Bem vinde***\n")

//const - constante / let - declarando uma variável
let nome = prompt("Digite o seu nome: ")

let idade = Number(prompt("Digite a sua idade: "))

let altura = Number(prompt("Digite a sua altura: "))

//console.log("Olá, meu nome é " + nome + "minha idade é " + idade + " e minha altura é " + altura)
console.log(`Olá, meu nome é ${nome} minha idade é ${idade} e minha altura é ${altura}`)