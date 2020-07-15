// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer,
// seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

// definindo valor para n
let n = 3;
// definindo variavel asterisco (a que será printada)
let asterisk = "*";
// caso a condição seja atendida
if (n > 1){
    // imprimir primeiro uma linha em branco como no exemplo
    console.log (" ");
    // para um indice que vá de 0 até chegar ao tamanho de n repetir a mesma situação
    for (let index = 0; index < n; index += 1){
        // printar a variavel "asterisk" 'n' vezes
        console.log (asterisk.repeat(n));
    }
}
// caso a condiçao não tenha sido atendida, printar ERRO
else {
    console.log ("'n' must be higher than 1")
}
