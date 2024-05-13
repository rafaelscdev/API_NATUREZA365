const Usuario = require("../models/Usuario")
const { sign } = require('jsonwebtoken')

class UsuarioController {
    async login (req, res) {
        try {
            const email = req.body.email
            const senha = req.body.senha

            if (!email) {
                return res.status(400).json({ message: 'O email é obrigatório.' })
            }

            if (!senha) {
                return res.status(400).json({ message: 'A senha é obrigatória.' })
            }

            const usuario = await Usuario.findOne({
                where: { email: email }
            })

            if (!usuario) {
                return res.status(404).json({ error: 'Nenhum usuário corresponde a email e senha fornecidos!' })
            }

            const payload = { sub: usuario.id, email: usuario.email, nome: usuario.nome }

            const token = sign(payload, process.env.SECRET_JWT)

            res.status(200).json({ Token: token })

        } catch (error) {
            console.log(error.message)
            return res.status(500).json({ error: 'Algo deu errado!' })
        }
    }
}

module.exports = new UsuarioController()