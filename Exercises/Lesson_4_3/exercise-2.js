// 2- Para o segundo exercício, faça o mesmo que antes, 
// mas que imprima um triângulo retângulo com 5 asteriscos de base.

// definindo valor para n
let n = 6;
// definindo variavel asterisco (a que será printada)
let asterisk = "*";
// caso a condição seja atendida
if (n > 1){
    // imprimir primeiro uma linha em branco como no exemplo
    console.log (" ");
    // para um indice que vá de 0 até chegar ao tamanho de n repetir a mesma situação
    for (let index = 1; index <= n; index += 1){
        // printar a variavel "asterisk" vezes o numero do 'index' no momento
        console.log (asterisk.repeat(index));
    }
}
// caso a condiçao não tenha sido atendida, printar ERRO
else {
    console.log ("'n' must be higher than 1")
}
