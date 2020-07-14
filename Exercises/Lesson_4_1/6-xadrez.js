// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas 
// quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as 
// letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop -> diagonals

let chessPiece;
chessPiece = "KIng";

switch (chessPiece.toLowerCase()) {
    case 'king':
        console.log ("King -> One square in any direction.")
        break;
    case 'Queen':
        console.log ("Queen -> Diagonally, horizontally, or vertically.")
        break;
    case 'rook':
        console.log ("Rooks -> Horizontally or vertically.")
        break;
    case 'bishop':
        console.log ("Bishop -> Diagonally")
        break;
    case 'knight':
        console.log ("Knight -> In an ‘L’ shape’")
        break;
    case 'pawn':
        console.log ("Pawn -> Vertically forward")
        break;
    default:
        console.log ("Invalid piece.")
}
