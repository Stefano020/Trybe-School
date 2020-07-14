// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (index = 0; index < 10; index += 1) {
    sum = sum + numbers[index];
}

console.log (sum/index);