const jwt = require('../utils/jwt')

module.exports = async (ctx, next) => {
    let user = await jwt.verifyToken(ctx)
    ctx.user = user
    console.log('user-3', user)
    await next()
}