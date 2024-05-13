const { connection } = require("../database/connection");
const { DataTypes } = require('sequelize');

    const Local = connection.define('locais', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nome: {
            type: DataTypes.STRING,
        },
        cep: {
            type: DataTypes.STRING,
        },
        latitude: {
            type: DataTypes.STRING,
        },
        longitude: {
            type: DataTypes.STRING,
        },
        localidade: {
            type: DataTypes.STRING,
        },
        descricao: {
            type: DataTypes.STRING,
        },
        usuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'usuarios', 
                key: 'id' 
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
    }});

    Local.associate = (models) => {
        Local.belongsTo(models.Usuario)
        }
    
    module.exports = Local

