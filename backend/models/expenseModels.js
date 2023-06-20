import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Expenses = db.define(
  "expenses",
  {
    expenses_name: DataTypes.STRING,
    expenses_amount: DataTypes.FLOAT,
    expenses_description: DataTypes.STRING,
    expenses_date: DataTypes.DATE,
  },
  {
    freezeTableName: true,
  }
);

export default Expenses;
