const userService = require('../services/user');

module.exports = {
  // 회원가입
  register: async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    try {
      const newUser = await userService.register(name, email, password, confirmPassword);
      res.status(201).json(newUser);
    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // 로그인
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const token = await userService.login(email, password);
      res.status(200).json({ token });
    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },
};
