import Income from "./IncomeModel";
import Expense from "./ExpenseModel";

const CombinedModel = {
  async getAllData() {
    const incomes = await Income.findAll();
    const expenses = await Expense.findAll();
    return { incomes, expenses };
  },
};

export default CombinedModel;
