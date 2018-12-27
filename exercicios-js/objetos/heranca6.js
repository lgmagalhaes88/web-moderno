function Aula(nome, id){
    this.nome = nome
    this.id = id
}

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj;
}

const aula1 = new Aula("taa", 123)

console.log(aula1)
const ob = novo(Aula, "oo", 321)
console.log(ob)