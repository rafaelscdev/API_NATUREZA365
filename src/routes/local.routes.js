
const { Router } = require('express');
const LocalController = require('../controllers/LocalController')

const localRoutes = Router()

localRoutes.post('/', LocalController.cadastrarLocal
    /*  
            #swagger.tags = ['Local'],
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Adiciona um novo Local',
                schema: {
                    $nome: "Parque dos Coqueiros",
                    $cep: "88080010",                   
                    $descricao: "Descrição do meu novo Local"
            }
        }
    */
)

localRoutes.get('/', LocalController.listarTodos
    /*  
        #swagger.tags = ['Local'],
    */
)
localRoutes.get('/:local_Id', LocalController.listarUm
    /*  
        #swagger.tags = ['Local'],
    */
)
localRoutes.get('/:local_Id/maps', LocalController.listarMaps_Id
    /*  
        #swagger.tags = ['Local'],
    */
)
localRoutes.put('/:local_Id', LocalController.atualizarLocal
    /*  
            #swagger.tags = ['Local'],
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Atualiza um Local',
                schema: {
                    $nome: "Novo Local",
                    $cep: "88058613",
                    latitude: "Preenchido pela API externa",
                    longitude: "Preenchido pela API externa",
                    localidade: "Preenchido pela API externa",                   
                    $descricao: "Descrição do meu novo Local"
            }}
    */
)
localRoutes.delete('/:local_Id', LocalController.deletarLocal
    /*  
        #swagger.tags = ['Local'],
    */
)


module.exports = localRoutes;
