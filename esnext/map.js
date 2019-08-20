const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

// undefined
console.log(tecnologias.react)

// { framework: false }
console.log(tecnologias.get('react'))

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

//{ framework: false }
// [Function] 'Função'
// {} 'Objeto'
// 123 'Número'
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

// true
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)

Promise
// false
console.log(chavesVariadas.has(123))