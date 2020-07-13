// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
// Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

let anguloA = 60;
let anguloB = 40;
let anguloC = 80;

if ((anguloA + anguloB + anguloC) === 180) {
    console.log ("True");
}
else {
    console.log ("False");
}