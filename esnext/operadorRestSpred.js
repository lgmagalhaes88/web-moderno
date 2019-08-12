// Spread
const funcionario = { nome: 'Maria', salario: 1235.00 }
const clone = { ativo: true, ...funcionario }

// { ativo: true, nome: 'Maria', salario: 1235 }
console.log(clone)

const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']

// [ 'Maria', 'Joao', 'Pedro', 'Gloria', 'Rafaela' ]
console.log(grupoFinal)