const { connection } = require("../database/connection");
const { DataTypes } = require('sequelize');

    const Usuario = connection.define('usuarios', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING,
        },
        senha: {
            type: DataTypes.STRING,
        },
        nome: {
            type: DataTypes.STRING,
        },
        sexo: {
            type: DataTypes.STRING,
        },
        cpf: {
            type: DataTypes.STRING,
        },
        endereco: {
            type: DataTypes.STRING,
        },
        data_nascimento: {
            type: DataTypes.DATE,
        },
        celular: {
            type: DataTypes.STRING,
        }
    });

    Usuario.associate = (models) => {
    Usuario.hasMany(models.Local)
    }

module.exports = Usuario
