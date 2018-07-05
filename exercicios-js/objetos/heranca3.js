const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false}
})

console.log(filha2.nome)
filha2.nome = "tata"

console.log(filha2.nome)    

for(let key in filha2){
    console.log(key)
}