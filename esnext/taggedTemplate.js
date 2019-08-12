/**
 * processa o template dentro de uma função
 * @param {*} partes 
 * @param  {...any} valores 
 */
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return "Outra string"
}

const aluno = 'Gui'
const situacao = 'Aprovado'

/**
 * 
 * [ '', ' está ', '.' ]
 * [ 'Gui', 'Aprovado' ]
 * Outra string
 * 
 */
console.log(tag `${aluno} está ${situacao}.`)