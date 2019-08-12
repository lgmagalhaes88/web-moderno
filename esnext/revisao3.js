// Object.values/entries

const obj = { a: 1, b: 2, c: 3}

//[ 1, 2, 3 ]
console.log(Object.values(obj))

// [ 'a', 'b', 'c' ]
console.log(Object.keys(obj))

// [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
console.log(Object.entries(obj))

/**
 * Não mais precisa criar o objeto como 
 * 
 * const pessoa = {
 *  nome = nome
 * }
 * 
 * ou colocar o function depois de uma função
 * 
 * const pessoa = {
 *  ola = function () {
 *  }
 * }
 * 
 */

const nome = "bATATA"

const pessoa = {
    nome,
    ola() {
        return "Hello There!"
    }
}

console.log(pessoa.nome, pessoa.ola())

class Animal {}
class Cachorro extends Animal {}