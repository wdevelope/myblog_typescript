const userService = require('../services/user');

module.exports = {
  // 회원가입
  register: async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const newUser = await userService.register(name, email, password);
      res.status(201).json(newUser);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  },

  // 로그인
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const token = await userService.login(email, password);
      res.status(200).json({ message: '로그인 성공' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  },
};
