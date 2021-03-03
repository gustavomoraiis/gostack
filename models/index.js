const { Sequelize } = require('sequelize');
const database = {};

const options = {
    username: 'postgres',
    password: 'progweb1010',
    database: 'postgres',
    host: 'localhost',
    dialect: 'postgres',
};

const sequelize = new Sequelize(options);

sequelize
    .authenticate()
    .then(() => console.log(`Conexão com o banco ${options.database} realizada com sucesso`))
    .catch((error) => console.log(`Falha ao conectar ao banco ${options.database}: ${error}`));

database.sequelize = sequelize;

module.exports = database;