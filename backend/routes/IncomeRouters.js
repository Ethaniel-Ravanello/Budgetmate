import express from "express";
import {
  getIncome,
  getIncomeById,
  createIncome,
  updateIncome,
  deleteIncome,
} from "../controller/IncomeController.js";

const router = express.Router();

router.get("/income", getIncome);
router.get("/income/:id", getIncomeById);

router.post("/income", createIncome);
router.put("/income/:id", updateIncome);
router.delete("/income/:id", deleteIncome);

export default router;
