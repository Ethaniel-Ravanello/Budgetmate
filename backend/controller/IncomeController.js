import Income from "../models/IncomeModels.js";

export const getIncome = async (req, res) => {
  try {
    const response = await Income.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getIncomeById = async (req, res) => {
  try {
    const response = await Income.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const createIncome = async (req, res) => {
  try {
    await Income.create(req.body);
    res.status(201).json({ message: "New Income has been added" });
  } catch (error) {
    console.log(error);
  }
};

export const updateIncome = async (req, res) => {
  try {
    await Income.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ message: "Income has been updated" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteIncome = async (req, res) => {
  try {
    await Income.destroy(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ message: "Income has been delete" });
  } catch (error) {
    console.log(error);
  }
};
