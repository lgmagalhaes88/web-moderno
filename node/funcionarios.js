const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const _ = require("lodash")

axios.default.get(url).then(response => {
    filtro = _.filter(response.data, item => item.pais === 'China')
    menor = _.reduce(filtro, function(actual, preview) {
        return actual.salario <= preview.salario ? actual : preview
    })
    console.log(menor)
})