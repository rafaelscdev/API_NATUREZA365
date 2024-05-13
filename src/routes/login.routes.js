const { Router } = require('express') 
const LoginController = require("../controllers/LoginController")

const loginRoutes = new Router()

loginRoutes.post('/', LoginController.login
    /*  
            #swagger.tags = ['Usuario'],
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Login do Usuário',
                schema: {
                    $email: "exemplo01@gmail.com",
                    $senha: "teste123"
            }
        }
    */

)

module.exports = loginRoutes