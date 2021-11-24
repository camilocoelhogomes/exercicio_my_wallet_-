import connection from "../database";
const isEmail = ({email}) => connection.query(
      `SELECT * FROM "users" WHERE "email"=$1`,
      [email]
);
    
export default isEmail;