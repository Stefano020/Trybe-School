// Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. 
// Cada valor do novo array deverá ser igual ao valor correspondente do array anterior 
// multiplicado pelo próximo. Por exemplo: o primeiro valor do novo array deverá ser 45,
// pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja 
// próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
// percorre cada numero da array
for (index = 0; index < numbers.length; index += 1) {
    // caso o numero subsequente seja existente fazer operação por ele
    if (numbers[index + 1]){
        newNumbers.push (numbers[index] * numbers[index + 1]);
    }
    // se não, por 2
    else {
        newNumbers.push (numbers[index] * 2);
    }
}

console.log ("Essa é a array numbers: " + numbers);

console.log ("Essa é a array newNumbers: " + newNumbers);