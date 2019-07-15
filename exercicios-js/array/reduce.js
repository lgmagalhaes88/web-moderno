const alunos = [
    { nome: "João", nota: 3, bolsista: true },
    { nome: "Cazé", nota: 6, bolsista: false },
    { nome: "Marina", nota: 9, bolsista: true },
    { nome: "Kaka", nota: 5, bolsista: true},
]

let todosSaoBolsistas = alunos.map(aluno => aluno.bolsista).reduce(function(validacao, atual) {
   return validacao && atual
});

console.log(todosSaoBolsistas)