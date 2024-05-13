const Usuario = require("../models/Usuario")
const {usuarioSchema} = require("../middleware/validation")

class UsuarioController {
    async cadastrarUsuario (req, res) {
        try {
            const email = req.body.email
            const senha = req.body.senha
            const nome = req.body.nome
            const sexo = req.body.sexo
            const cpf = req.body.cpf
            const endereco = req.body.endereco
            const data_nascimento = req.body.data_nascimento
            const celular = req.body.celular
    
            await usuarioSchema.validate(req.body, { abortEarly: false })
    
            const usuarioExistente = await Usuario.findOne({ where: { email: email } });
            
            if (usuarioExistente) {
                return res.status(400).json({ message: 'O email já está em uso.' });
            }
    
            const novoUsuario = await Usuario.create({
                email: email,
                senha: senha,
                nome: nome,
                sexo: sexo,
                cpf: cpf,
                endereco: endereco,
                data_nascimento: data_nascimento,
                celular: celular
            })
    
            res.status(201).json(novoUsuario)
    
        } catch (error) {
            console.log(error.message)
            res.status(500).json({ error: 'Não possível cadastrar o usuário' })
        }
    }

    async listarTodos (req, res) {
        try {
    
            const usuarios = await Usuario.findAll()
    
            res.status(200).json(usuarios)
    
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Erro interno do servidor ao listar usuários.' })
        
        }
    }

    async atualizarUsuario (req, res) {
        try {
            const { id } = req.params

            const email = req.body.email
            const senha = req.body.senha
            const nome = req.body.nome
            const sexo = req.body.sexo
            const cpf = req.body.cpf
            const endereco = req.body.endereco
            const data_nascimento = req.body.data_nascimento
            const celular = req.body.celular
            
            const usuario = await Usuario.findByPk(id)
            
            if (!usuario) {
                return res.status(404).json({ message: "Usuário não encontrado!" })
            }
    
            await usuarioSchema.validate({ email, senha, nome, sexo, cpf, endereco, data_nascimento, celular }, { abortEarly: false })
            
            await usuario.update({
                email,
                senha,
                nome,
                sexo,
                cpf,
                endereco,
                data_nascimento,
                celular
            })
    
            return res.status(200).json({ message: 'Usuário atualizado com sucesso.', usuario })
        } catch (error) {
            console.log(error.message)
            res.status(500).json({ error: 'Não possível atualizar o usuário.' })
    }
    }

    async deletarUsuario (req, res) {
        try {
            const { id } = req.params
    
            const usuario = await Usuario.findByPk(id)
    
            if (!usuario) {
                return res.status(404).json({ message: "Usuário não encontrado!" })
            }
    
            await usuario.destroy()
    
            return res.status(200).json({ message: 'Usuário excluído com sucesso.' })
        } catch (error) {
            console.error(error.message)
            return res.status(500).json({ error: 'Erro interno do servidor ao usuário local.' })
        }
    }

    }


module.exports = new UsuarioController()