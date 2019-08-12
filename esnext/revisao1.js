// let e const

{
    var a = 1
    let b = 2
}

console.log(a) // output = 1
console.log(b) // output = Erro

// Template String
const produto = 'iPad'
console.log(`${produto} é caro`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x ,y)

const {idade: i, nome } = {nome: 'Ana', idade: 9}
console.log(i, nome)