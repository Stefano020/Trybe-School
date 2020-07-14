// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto 
// o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos,
// use as seguintes referências:

// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioBruto = 10000.59;
let salarioPosINSS;
let salarioPosIR;

// condição para INSS
if (salarioBruto <= 1556.94) {
    salarioPosINSS = (salarioBruto * 0,92);
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioPosINSS = (salarioBruto * 0,91);
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioPosINSS = (salarioBruto * 0.89);
}
else if (salarioBruto > 5189.82) {
    salarioPosINSS = (salarioBruto - 570.88);
}

// condição para IR
if (salarioPosINSS <= 1903.98) {
    salarioPosIR = salarioPosINSS;
}
else if (salarioPosINSS >= 1903.99 && salarioPosINSS <= 2826.65) {
    salarioPosIR = ((salarioPosINSS * 0.925) + 142,80)
}
else if (salarioPosINSS >= 2826.66 && salarioPosINSS <= 3751.05) {
    salarioPosIR = ((salarioPosINSS * 0.85) + 354.80)
}
else if (salarioPosINSS >= 3751.06 && salarioPosINSS <= 4664.68) {
    salarioPosIR = ((salarioPosINSS * 0.775) + 636.13)
}
else if (salarioPosINSS > 4664.68) {
    salarioPosIR = ((salarioPosINSS * 0.725) + 869.36)
}

console.log ("Após os descontos seus salários será de: " + salarioPosIR.toFixed(2))


