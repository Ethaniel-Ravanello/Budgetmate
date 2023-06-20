import { Sequelize } from "sequelize";

const db = new Sequelize("budgetmate", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
