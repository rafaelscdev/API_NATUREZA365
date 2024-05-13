const Usuario = require("../../models/Usuario");

module.exports = {
    up: async (QueryInterface, Sequelize) => {
        try {
            await Usuario.create({
                email: "exemplo02@gmail.com",
                senha: "test123",
                nome: "Goku dos Santos",
                sexo: "Masculino",
                cpf: "11122233845",
                endereco: "Rua exemplo, número 2840",
                data_nascimento: "1988-05-18",
                celular: "48996452332"
            });
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
        }
    },
    down: async (QueryInterface, Sequelize) => {
        try {
            await Usuario.destroy({
                where: {
                    email: "exemplo02@gmail.com"
                }
            });
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
        }
    }
};
