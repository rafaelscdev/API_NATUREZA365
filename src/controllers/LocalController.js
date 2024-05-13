const Local = require("../models/Local")
const { getUsuarioId }= require('../middleware/autenticacao')
const { localSchema } = require("../middleware/validation")
const { getInfoLocal, getGoogleMapsLink } = require("../service/map.service")

class LocalController {
    
    async cadastrarLocal (req, res) {
        try {
            const nome = req.body.nome
            const cep = req.body.cep
            const descricao = req.body.descricao
    
            await localSchema.validate({ nome, cep, descricao }, { abortEarly: false })
    
            const usuarioId = await getUsuarioId(req)

            const { lat, lon, display_name } = await getInfoLocal(cep)
            
            const novoLocal = await Local.create({
                nome,
                cep,
                descricao,
                latitude: lat,
                longitude: lon,
                localidade: display_name,
                usuarioId
            });
    
            return res.status(201).json({ message: 'Local cadastrado com sucesso.', local: novoLocal  })
        } catch (error) {
            console.log(error.message)
            res.status(500).json({ error: 'Não possível cadastrar o local.' })
        }
    }

    async listarTodos (req, res) {
        try {
            const usuarioId = await getUsuarioId(req)
    
            const locais = await Local.findAll({ 
                where: { 
                    usuarioId } 
                })
    
            res.status(200).json(locais)
    
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Erro interno do servidor ao cadastrar novo local.' })
        
        }
    }

    async listarUm (req, res) {
        try {

            const { local_Id } = req.params
    
            const local = await Local.findByPk(local_Id)
    
            if (!local) {
                return res.status(404).json({ message: "Local não encontrado!" })
            }
    
            const usuarioId = await getUsuarioId(req)
    
            if (local.usuarioId !== usuarioId) {
                return res.status(403).json({ message: "Você não tem permissão para acessar este local." });
            }
    
            res.json(local)
            
        } catch (error) {
            console.log(error.message)
            res.status(500).json({ error: 'Não possível listar o local especifico.'})
        }
    }

    async listarMaps_Id (req, res) {
        try {
            const { local_Id } = req.params
    
            const local = await Local.findByPk(local_Id)
    
            if (!local) {
                return res.status(404).json({ message: "Local não encontrado!" })
            }

            const usuarioId = await getUsuarioId(req)
            
            if (local.usuarioId !== usuarioId) {
                return res.status(403).json({ message: "Você não tem permissão para acessar este local." })
            }

            const googleMapsLink = await getGoogleMapsLink(local)

            return res.status(200).json({ googleMapsLink })
        } catch (error) {
            console.error('Erro ao buscar link do Google Maps:', error)

            return res.status(500).json({ error: 'Erro interno do servidor ao buscar link do Google Maps.' })
        }
    }

    async atualizarLocal (req, res) {
        try {
            const { local_Id } = req.params
            const { nome, cep, descricao } = req.body
    
            const local = await Local.findByPk(local_Id)
    
            if (!local) {
                return res.status(404).json({ message: "Local não encontrado!" })
            }
            
            await localSchema.validate({ nome, cep, descricao }, { abortEarly: false })
            
            const usuarioId = await getUsuarioId(req)
            
            if (local.usuarioId !== usuarioId) {
                return res.status(403).json({ message: "Você não tem permissão para acessar este local." })
            }
            const { lat, lon, display_name } = await getInfoLocal(cep)
            await local.update({
                nome,
                cep,
                descricao,
                latitude: lat,
                longitude: lon,
                localidade: display_name,
            })
    
            return res.status(200).json({ message: 'Local atualizado com sucesso.', local })
        } catch (error) {
            console.log(error.message)
            res.status(500).json({ error: 'Não possível atualizar o local.' })
        }
    }

    async deletarLocal (req, res) {
        try {
            const { local_Id } = req.params
    
            const local = await Local.findByPk(local_Id)
    
            if (!local) {
                return res.status(404).json({ message: "Local não encontrado!" })
            }
    
            const usuarioId = await getUsuarioId(req)
            
            if (local.usuarioId !== usuarioId) {
                return res.status(403).json({ message: "Você não tem permissão para acessar este local." })
            }
    
            await local.destroy()
    
            return res.status(200).json({ message: 'Local excluído com sucesso.' })
        } catch (error) {
            console.error(error.message)
            return res.status(500).json({ error: 'Erro interno do servidor ao excluir local.' })
        }
    }
}

module.exports = new LocalController()