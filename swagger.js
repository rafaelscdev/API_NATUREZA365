const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "API NATUREZA365.",
        description: "Uma API REST de cadastro de usuários e locais, com intuíto de catalogar trilhas em Florianópolis através do cep e retona um link do Google maps por meio de uma API externa. Utilizando javascript, express, sequelize, node.js e postgres.",
        version: "1.0.0"
    },
    host: 'localhost:3000',
    security: [{ "apiKeyAuth": [] }],
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apiKey',
            in: 'header', 
            name: 'authorization', 
            description: 'Token de Autenticação'
        }
    }
};

const outputFile = './src/routes/swagger.json';
const routes = ['./src/server.js'];

swaggerAutogen(outputFile, routes, doc);