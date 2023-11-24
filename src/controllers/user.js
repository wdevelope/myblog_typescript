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
      res.cookie('Authorization', `Bearer ${token}`, { maxAge: 3 * 24 * 60 * 60 * 1000 });
      res.status(200).json({ token });
    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },

  // 유저정보
  userInfo: async (req, res) => {
    try {
      const user = await userService.userInfo(req.user.userId);
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },

  //로그아웃
  logout: async (req, res) => {
    try {
      res.clearCookie('Authorization');
      res.status(200).json({ message: '로그아웃 되었습니다.' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ errorMessage: err.message });
    }
  },
};
