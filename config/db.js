// const {Sequelize} = require('sequelize'); //here we are just requiring Sequelize

// const createDB = new Sequelize("test-db","user","pass",{
//   dialect: "sqlite",
//   host: "./config/db.splite"
// }); // we first created the new instances of it and then through dialect we uses sqlite and then tell the position where we want to save it
// module.export= createDB;
const { Sequelize } = require('sequelize');
//creating a database in sqlite
const createDB = new Sequelize("test-db","user","pass",{
  dialect:"sqlite",
  host:"./config/db.sqlite",
});

module.exports = createDB;  