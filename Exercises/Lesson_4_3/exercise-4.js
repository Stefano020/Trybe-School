// 4- Depois, faça uma pirâmide com n asteriscos de base:

// definindo valor para n
let n = 5;
// definindo variavel asterisco (a que será printada)
let asterisk = "*";
// definindo variavel de 1 espaço branco " "
let space = " ";
// caso a condição seja atendida
if ((n > 1) && (n % 2 != 0)){
    // imprimir primeiro uma linha em branco como no exemplo
    console.log (" ");
    // para um indice que vá de 0 até chegar ao tamanho de n repetir a mesma situação 
    for (let index = 1; index <= n; index += 1){
        // printar variavel "space" (n - index) vezes e a variavel "asterisk" vezes o numero do 'index' no momento
        console.log ((space.repeat(n - index)) + (asterisk.repeat(index)));
    }
}
// caso a condiçao não tenha sido atendida, printar ERRO
else {
    console.log ("'n' must be higher than 1")
}
