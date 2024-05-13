const { Router } = require("express");
const usuarioRoutes = require("./usuario.routes.js");
const localRoutes = require("./local.routes.js")
const loginRoutes = require("./login.routes.js")
const { auth } = require('../middleware/autenticacao.js')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../routes/swagger.json')


const routes = Router()


routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
routes.use('/usuario', usuarioRoutes)
routes.use('/login', loginRoutes)
routes.use('/local', auth, localRoutes)

module.exports = routes