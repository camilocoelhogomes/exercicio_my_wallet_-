import jwt from 'jsonwebtoken';
import * as services from '../services/services.js'
const financialEvents = async (req, res) => {
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

    const { value, type } = req.body;

     const result = await services.financialEvents({ id: user.id, value, type })
     
         if (result?.error && result?.error === 'invalid body') {
      return res.sendStatus(400);
    }
      
    res.sendStatus(201);
   } catch (err) {
     console.log(err)
    res.sendStatus(500);
  }
}

export default financialEvents;