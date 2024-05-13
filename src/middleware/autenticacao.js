const jwt = require('jsonwebtoken')
const { verify } = require("jsonwebtoken")

async function auth(req, res, next) {
    try {
        const { authorization } = req.headers

        req['payload'] = verify(authorization, process.env.SECRET_JWT)

        next()

    } catch (error) {
        return res.status(401).json({
            message: "Autenticação Falhou!",
            cause: error.message
        })
    }
}

async function getUsuarioId (req, res, next) {
    try {
        const token = req.headers.authorization
        const decodedToken = jwt.verify(token, process.env.SECRET_JWT);
        const usuarioId = decodedToken.sub
        return usuarioId
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não possível obter o ID do usuário' })
    
    }
}


module.exports = { auth, getUsuarioId }


