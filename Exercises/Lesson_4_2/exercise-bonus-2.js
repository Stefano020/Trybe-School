// Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// vamos percorrer por toda a array
for (let index = 1; index < numbers.length; index += 1) {
    // dentro de cada interação dessa, percorremos novamente para cada par que queremos interagir
    for (let pair = 0; pair < numbers.length - index; pair += 1){
        // comparação em ação
        if (numbers[pair] < numbers[pair + 1]){
            // aqui acontece a troca de posições
            position = numbers[pair];
            numbers[pair] = numbers[pair + 1];
            numbers[pair + 1] = position;
        }
    }
}

console.log (numbers);