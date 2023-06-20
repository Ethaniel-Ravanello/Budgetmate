import Income from "../models/IncomeModels.js";

export const getIncome = async () => {
  try {
    const response = await Income.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
