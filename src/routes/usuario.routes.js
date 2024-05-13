const { Router } = require('express')
const UsuarioController = require('../controllers/UsuarioController')
const { auth } = require('../middleware/autenticacao')

const usuarioRoutes = new Router()

usuarioRoutes.post('/', UsuarioController.cadastrarUsuario
    /*  
            #swagger.tags = ['Usuario'],
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Adiciona um novo Usuário',
                schema: {
                    $email: "exemplo01@gmail.com",
                    $senha: "teste123",
                    $nome: "Rafael Correa",
                    sexo: "Masculino", 
                    $cpf: "11122233345",
                    $endereco: "Rua exemplo, numero 1805",
                    data_nascimento: "1992-05-18",
                    celular: "48999452332"
            }
        }
    */
)

usuarioRoutes.get('/', auth, UsuarioController.listarTodos
    /*  
        #swagger.tags = ['Usuario'],
        }
    */
)

usuarioRoutes.put('/:id', auth, UsuarioController.atualizarUsuario
    /*  
            #swagger.tags = ['Usuario'],
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Atualiza um Usuário',
                schema: {
                    $email: "exemplo01@gmail.com",
                    $senha: "teste123",
                    $nome: "Rafael Correa",
                    sexo: "Masculino", 
                    $cpf: "11122233345",
                    $endereco: "Rua exemplo, numero 2480",
                    data_nascimento: "1992-05-18",
                    celular: "48999456779"
            }
        }
    }
    */
)

usuarioRoutes.delete('/:id', auth, UsuarioController.deletarUsuario
    /*  
        #swagger.tags = ['Usuario'],
    */
)

module.exports = usuarioRoutes
