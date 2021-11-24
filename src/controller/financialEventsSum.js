import jwt from 'jsonwebtoken';
import * as services from '../services/services.js';

const financialEventsSum = async (req, res) => {
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
     const result = await services.getFinancialEventsSum({ id: user.id });
    res.send({sum: result});
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export default financialEventsSum;