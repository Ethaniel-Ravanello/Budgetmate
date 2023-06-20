import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Income = db.define(
  "income",
  {
    income_name: DataTypes.STRING,
    income_amount: DataTypes.FLOAT,
    income_description: DataTypes.STRING,
    income_source: DataTypes.STRING,
    income_date: DataTypes.DATE,
  },
  {
    freezeTableName: true,
  }
);

export default Income;
