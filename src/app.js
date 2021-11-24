import express from "express";
import cors from "cors";
import * as controller from './controller/controller'



const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", controller.signUp);

app.post("/sign-in", controller.signIn);

app.post("/financial-events", controller.financialEvents);

app.get("/financial-events", controller.getFinancialEvents);

app.get("/financial-events/sum", controller.financialEventsSum);

export default app;
