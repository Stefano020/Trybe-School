// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let highValue = 0;

for (let index = 0; index < 10; index += 1) {
    // se o numero atual for maior que o highValue do momento, troca o valor do highValue pelo numero atual
    if (numbers[index] > highValue) {
        highValue = numbers[index];
    }
}

console.log (highValue);