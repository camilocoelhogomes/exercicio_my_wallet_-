import * as services from '../services/services.js'
const signIn = async (req, res) => {
    try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.sendStatus(400);
    }
    const result = await services.signIn({email,password})
    
    if (result?.error && result?.error === 'invalid User') {
      return res.sendStatus(401);
    }
      
      res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export default signIn;