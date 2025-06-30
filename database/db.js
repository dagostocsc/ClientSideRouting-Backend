const { Sequelize } = require("sequelize");
const pg = require("pg");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/todo_list",
  {
    logging: false, // comment this line to enable logging
  }
);

//First we check process env databse url 
//maybe we have something set or we dont and if it is then we will utilize it
//if not we use the string provided on the right 

module.exports = db;
