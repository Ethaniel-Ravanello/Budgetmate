import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { Datatypes } = Sequelize;

const Expenses = db.define(
  "expenses",
  {
    expenses_name: Datatypes.STRING,
    expenses_amount: Datatypes.FLOAT,
    expenses_description: Datatypes.STRING,
    expenses_date: Datatypes.DATE,
  },
  {
    freezeTableName: true,
  }
);

export default Expenses;
