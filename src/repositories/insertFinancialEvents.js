import connection from "../database.js";

const insertFinancialEvents = ({id, value, type}) => connection.query(
      `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3) RETURNING *`,
      [id, value, type]
);
    
export default insertFinancialEvents;