import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import * as controller from './controller/controller'

import connection from "./database.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", controller.signUp);

app.post("/sign-in", controller.signIn);

app.post("/financial-events", controller.financialEvents);

app.get("/financial-events", controller.getFinancialEvents);

app.get("/financial-events/sum", async (req, res) => {
  try {
    const authorization = req.headers.authorization || "";
    const token = authorization.split('Bearer ')[1];

    if (!token) {
      return res.sendStatus(401);
    }

    let user;

    try {
      user = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      return res.sendStatus(401);
    }

    const events = await connection.query(
      `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
      [user.id]
    );

    const sum = events.rows.reduce((total, event) => event.type === 'INCOME' ? total + event.value : total - event.value, 0);

    res.send({ sum });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

export default app;
