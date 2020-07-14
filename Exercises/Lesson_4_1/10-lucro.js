// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: 
// o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro 
// (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.

// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de 
// entrada seja menor que zero.

let custo = 10;
let venda = 40;

if ((custo >= 0) && (venda >= 0)) {
    let lucro = ((venda - (custo * 1.20))*1000);
    console.log (lucro);
}
else {
    console.log ("O custo e a venda não podem ser negativos!")
}
