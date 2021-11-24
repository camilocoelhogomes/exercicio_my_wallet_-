
import * as repositories from '../repositories/repositories.js';
import bcrypt from 'bcrypt';
const signUp = async ({ name, email, password }) => {

  const existingUserWithGivenEmail = await repositories.isEmail({email})
    if (existingUserWithGivenEmail.rows[0]) {
      return {error: 'email conflict'}
    }
  
    
  const hashedPassword = bcrypt.hashSync(password, 12);
  const isSignUp = await repositories.signUp({ name, email, hashedPassword })
  return isSignUp.rowCount
}

export default signUp