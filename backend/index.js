import express from "express";
import cors from "cors";
import IncomeRouter from "./routes/IncomeRouters.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(IncomeRouter);

app.listen(5000, () => console.log("Server up and running at Port 5000"));
