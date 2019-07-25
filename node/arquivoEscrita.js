const fs = require('fs')

const produto = {
    nome: 'Celula',
    preco: 1234,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Gerado!!')
})