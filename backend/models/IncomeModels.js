import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { Datatypes } = Sequelize;

const Income = db.define(
  "income",
  {
    income_name: Datatypes.STRING,
    income_amount: Datatypes.FLOAT,
    income_description: Datatypes.STRING,
    income_date: Datatypes.DATE,
  },
  {
    freezeTableName: true,
  }
);

export default Income(async () => {
  await db.sync();
})();
