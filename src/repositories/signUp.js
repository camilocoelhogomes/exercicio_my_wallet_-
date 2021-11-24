import connection from "../database";
const signUp = ({ name, email, hashedPassword }) =>  connection.query(
      `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3) RETURNING *`,
      [name, email, hashedPassword]
    );


export default signUp