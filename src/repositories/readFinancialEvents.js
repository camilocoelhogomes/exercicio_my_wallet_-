import connection from "../database.js";

const readFinancialEvents = ({id}) => connection.query(
      `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
      [id]
);
    
export default readFinancialEvents;