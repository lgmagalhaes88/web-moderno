const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

/**
 * @type Produtos[]
 */
const produtos = {}

/**
 * 
 * @param {Produto} produto 
 */
function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

/**
 * 
 * @param {number} id 
 * @returns {Produto} produto correspondente ao id ou um objeto vazio
 */
function getProduto(id) {
    return produtos[id] || {}
}

/**
 * @returns {Produto[]} todos os produtos
 */
function getProdutos() {
    return Object.values(produtos)
}

module.exports = {
    salvarProduto,
    getProduto,
    getProdutos
}