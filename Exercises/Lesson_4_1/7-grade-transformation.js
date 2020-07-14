// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
//  Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota
//  passada for menor que 0 ou maior que 100.

let grade = -100;

if (grade >= 90 && grade <= 100) {
    console.log ("Grade A")
}
else if (grade >= 80 && grade < 90) {
    console.log ("Grade B")
}
else if (grade >= 70 && grade < 80) {
    console.log ("Grade C")
}
else if (grade >= 60 && grade < 70) {
    console.log ("Grade D")
}
else if (grade >= 50 && grade < 60) {
    console.log ("Grade E")
}
else if (grade < 50 && grade >= 0) {
    console.log ("Grade F")
}
else if (grade > 100) {
    console.log ("Not a valid grade.")
}
else {
    console.log ("Not a valid grade.")
}

