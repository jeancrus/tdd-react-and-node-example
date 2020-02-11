import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;
    const emailExist = await User.findOne({
      where: { email },
    });
    if (emailExist)
      return res.status(400).json({ error: 'Email already registered' });

    const user = await User.create(req.body);
    return res.json(user);
  }
}

export default new UserController();
