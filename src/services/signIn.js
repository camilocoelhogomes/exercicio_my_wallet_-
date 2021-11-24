import * as repositories from '../repositories/repositories.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const signIn = async ({ email, password }) => {
  const user = await repositories.isEmail({ email });
  
    if (!user.rows[0] || !bcrypt.compareSync(password, user.rows[0].password)) {
      return {error: 'invalid User'};
    }

    const token = jwt.sign({
      id: user.rows[0].id
    }, process.env.JWT_SECRET);

  return token
}

export default signIn