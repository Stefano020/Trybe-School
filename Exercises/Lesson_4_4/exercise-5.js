//Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro 
// e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178",
// "O último MacPatinhas", "Sim".

let newInfo = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

// Valor esperado no console:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes  Atenção para essa última linha!

  console.log (info.personagem + " e " + newInfo.personagem);
  console.log (info.origem + " e " + newInfo.origem);
  console.log (info.nota + " e " + newInfo.nota);
  if (info.recorrente === newInfo.recorrente) {
    console.log ("Ambos recorrentes");
  }

