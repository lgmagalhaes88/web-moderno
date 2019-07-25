const fs = require("fs")

//Síncrono

const caminho = __dirname + '/arquivo.json'

const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

// Assíncrona

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if (err) {
        console.log("hmm, alguma coisa aconteceu de errado")
    } else {
        const config = JSON.parse(conteudo)
        console.log(`${config.db.host}:${config.db.porta}`)
    }
})

// Ler json

const config = require('./arquivo.json')
console.log(config.db)

// Diretorio

fs.readdir(__dirname, (err, conteudo) => {
    console.log(conteudo)

    conteudo.forEach(file => {

        try {
            const instanciaA = require(`./${file}`)
            instanciaA.inc()
        } catch (error) {
            console.log('not a valid file')
        }

    })

})