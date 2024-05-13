const Usuario = require("../../models/Usuario");
const Local = require("../../models/Local");

module.exports = {
    up: async (QueryInterface, Sequelize) => {
        try {
            const usuario = await Usuario.findOne({ where: { email: "exemplo02@gmail.com" } });

            if (!usuario) {
                console.error("Usuário não encontrado.");
                return;
            }

            await Local.bulkCreate([
                {
                    nome: "Itaguaçu",
                    cep: "88085500",
                    latitude: "-27.6157516", 
                    longitude: "-48.590399",
                    localidade: "88085-500, Itaguaçu, Florianópolis, Região Geográfica Imediata de Florianópolis, Região Geográfica Intermediária de Florianópolis, Santa Catarina, Região Sul, Brasil",
                    descricao: "Lindo local!",
                    usuarioId: usuario.id
                },
                {
                    nome: "Parque dos Coqueiros",
                    cep: "88080010",
                    latitude: "-27.59922496", 
                    longitude: "-48.5722339",
                    localidade: "88080-010, Coqueiros, Florianópolis, Região Geográfica Imediata de Florianópolis, Região Geográfica Intermediária de Florianópolis, Santa Catarina, Região Sul, Brasil",
                    descricao: "Lugar agradável",
                    usuarioId: usuario.id
                }
            ]);
        } catch (error) {
            console.error("Erro ao criar locais:", error);
        }
    },
    down: async (QueryInterface, Sequelize) => {
        try {
            await Local.destroy({
                where: {
                    cep: ["88085500", "88080010"]
                }
            });
        } catch (error) {
            console.error("Erro ao excluir locais:", error);
        }
    }
};
