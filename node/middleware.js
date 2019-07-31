// Middleware pattern (chain of responsability)

/**
 * 
 * @param {class} ctx 
 * @param {function} next 
 */
const passo1 = (ctx, next) => {
    ctx.valor1 = "mid1"
    next()
}

/**
 * 
 * @param {class} ctx 
 * @param {function} next 
 */
const passo2 = (ctx, next) => {
    ctx.valor2 = "mid2"
    next()
}

/**
 * 
 * @param {class} ctx 
 */
const passo3 = ctx => ctx.valor3 = "mid3"

/**
 * 
 * @param {object} ctx 
 * @param  {...function} middlewares 
 */
const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)