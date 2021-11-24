import * as services from '../services/services.js'

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.sendStatus(400);
    }

    const result = await services.signUp({ name, email, password });

    if (result?.error && result?.error === 'email conflict') {
      return res.sendStatus(409);
    }

    if (result > 0) {
      return res.sendStatus(201);
    }
    res.sendStatus(500);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export default signUp;