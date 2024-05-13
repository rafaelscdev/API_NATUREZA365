###### Api Natureza365 ######


## A API construída é uma aplicação para gerenciar usuários e locais. Essa API permite criar, listar, atualizar e deletar usuários e locais, além de autenticar usuários por meio de login com geração de token JWT.
## Ela também realiza validações de dados e possui integração com serviços externos para obter informações de locais a partir do CEP e gerar links do Google Maps.


###### Funcionalidades da API e Requisitos: ######

.A API permite cadastro de usuários, login, e manipulação de locais.
.Os usuários podem criar, obter, atualizar e deletar locais.
.Requer um banco de dados configurado e acessível para armazenar dados de usuários e locais.
.Requer um serviço de mapas (como OpenStreetMap) para obter coordenadas a partir de um CEP.
.Utiliza autenticação JWT para proteger rotas sensíveis.
.As rotas são documentadas automaticamente usando Swagger.  


## Rodar o repositório:

### Na primeira vez é necessário instalar as dependencias:
1. `npm install`

2. Se for em ambiente local: `npm install --dev`

3. `cp .env_example .env`

### Para rodar o repositório em ambiente local

1. `npm run start:dev`

## Trabalhando com migrations:

### Criar uma migration
1. Opção nº 1: `sequelize migration:generate --name criar_tabela_usuarios`

2. Opção nº 2: `npx sequelize-cli migration:generate --name criar_tabela_usuarios`

### Rodar uma migration.
1. Opção nº 1: `sequelize db:migrate`

2. Opção nº 2: `npx sequelize db:migrate`

### Reverter a última migration:
1. Opção nº 1: `sequelize-cli db:migrate:undo`

2. Opção nº 2: `npx sequelize-cli db:migrate:undo`

## Trabalhando com Seeders

### Criar valores iniciais no banco de dados:
1. Primeiro crie o usuário simulado pelo seeder:
   `sequelize db:seed --seed usuario.seeder.js`	 

2. Após criar o usuário, crie os locais associados:
   `sequelize db:seed --seed local.seeder.js`
 
###### Trabalhando com Documentação: ######

### Gerar o documento do Swagger.json usando o AutoGen
`npm run swagger`




## Documentação do Sequelize:
`https://sequelize.org/docs/v6/core-concepts/model-basics/`

## Documentação do swagger:
`https://swagger.io/docs/`

## Documentação do yup:
`https://docs.npmjs.com/`

## Link da API utilizada:
`https://nominatim.openstreetmap.org/ui/search.html`




###### Bibliotecas utilizadas: ######

### instalar o sequelize
`npm install sequelize`

### instalar o CLI do sequelize
`npm install -g sequelize-cli` 
 

### instalar o driver do PostgreSQL
`npm install pg` 


### instalar o dotenv
`npm install dotenv`

### instalar o JsonWebToken ( JWT )
`npm install jsonwebtoken`

### instalar o axios
`npm install axios`

### instalar o yup
`npm install --save yup`

### instalar o Swagger UI
`npm install swagger-ui-express`

### instalar o Swagger AutoGen para gerar o documento Swagger de forma automatica.
`npm install swagger-autogen`

### instalar o yup
`npm install --save yup`



## Modelos:
Usuario.js: Este modelo define a estrutura de dados para os usuários. Ele contém campos como email, senha, nome, sexo, CPF, endereço, data de nascimento e celular. Também tem uma associação com o modelo Local, indicando que um usuário pode ter muitos locais.

Local.js: Este modelo define a estrutura de dados para os locais. Ele contém campos como nome, CEP, latitude, longitude, localidade e descrição. Além disso, possui uma chave estrangeira usuarioId, indicando a associação com o modelo Usuario.

## Migrações:
criar_tabela_usuarios.js: Migração para criar a tabela de usuários no banco de dados.

criar_tabela_locais.js: Migração para criar a tabela de locais no banco de dados.

## Rotas:
usuario.routes.js: Define as rotas para operações CRUD relacionadas aos usuários, como cadastrar, listar, obter por ID, atualizar e deletar.

login.routes.js: Define a rota para autenticação de usuários.

local.routes.js: Define as rotas para operações CRUD relacionadas aos locais, como cadastrar, listar todos, obter por ID, obter link do Google Maps, atualizar e deletar.

routes.js: Centraliza todas as rotas da aplicação, incluindo rotas de usuários, login e locais.

## Controladores:
UsuarioController.js: Contém métodos para lidar com as operações CRUD dos usuários, como cadastrar, listar, obter por ID, atualizar e deletar. Também inclui a lógica para validação dos dados.

LoginController.js: Contém um método para lidar com a autenticação de usuários, gerando um token JWT após a verificação das credenciais.

LocalController.js: Contém métodos para lidar com as operações CRUD dos locais, como cadastrar, listar todos, obter por ID, obter link do Google Maps, atualizar e deletar. Também inclui lógica para verificar permissões e obter informações do local a partir do CEP.

## Configuração:
database.config.js: Configurações do banco de dados, como tipo de dialeto, host, usuário, senha, nome do banco de dados e porta.

## Conexão com o Banco de Dados:
connection.js: Estabelece a conexão com o banco de dados utilizando as configurações definidas em database.config.js.

## Middleware:
auth.js: Middleware para autenticar requisições utilizando tokens JWT. Também contém uma função para obter o ID do usuário a partir do token.

validation.js: Contém esquemas de validação usando a biblioteca Yup para dados de usuário e local.

## Serviços:
map.service.js: Contém funções para obter informações do local a partir do CEP e para gerar o link do Google Maps com base nas coordenadas.

## Inicialização do Servidor:
index.js: Inicializa a aplicação, instanciando a classe Server.

server.js: Classe Server que configura e inicializa o servidor Express, definindo middlewares, conexão com o banco de dados e execução do servidor na porta especificada.


###### Rota de Documentação do projeto (Swagger): http://localhost:3000/docs



## 1. POST /usuario (Rotas sem autenticação)
Cria um usuário.

## 2. POST /login
Efetua login de usuário cadastrado e receber um token para autenticação.

## 3. GET /usuario
Lista todos os usuarios Cadastrádos.

## 4. PUT /usuario
Atualiza os dados de um usuário.           

## 5. DELETE /usuario
Deleta um usuário.

## 6. POST /local
Cadastra um local associado a um usuário.

## 7. GET /local
Lista os locais cadastrados na API.

## 8. GET /local/:local_Id
Lista um local com base em seu ID.

## 9. GET /local/:local_Id/maps
Retorna um link do Google Maps referente ao local que já foi cadastrado, com base em seu ID.

## 10. PUT /local/:local_Id
Atualiza um local cadastrado, com base em seu ID.

## 11. DELETE /local/:local_Id
Exclui um local cadastrado, com base em seu ID.
