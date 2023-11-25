const userRepository = require('../repositories/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  // 회원가입
  register: async (name, email, password, confirmPassword) => {
    if (!confirmPassword) {
      throw new Error('비밀번호 확인이 필요합니다.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userRepository.register(name, email, hashedPassword);

    return newUser;
  },

  // 로그인
  login: async (email, password) => {
    const user = await userRepository.findUserByEmail(email);

    if (!user) {
      throw new Error('존재하지 않는 회원입니다.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('아이디 또는 비밀번호가 틀렸습니다.');
    }

    const token = jwt.sign({ userId: user.id, status: user.status }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIREIN,
    });

    return token;
  },

  // 유저 정보
  userInfo: async (userId) => {
    const user = await userRepository.findUserById(userId);

    if (!user) {
      throw new Error('존재하지 않는 회원입니다.');
    }

    return user;
  },

  // 유저 상태변경
  updateUser: async (email, status) => {
    const user = await userRepository.findUserByEmail(email);

    if (!user) {
      throw new Error('존재하지 않는 회원입니다.');
    }

    const updatedUser = await userRepository.updateUser(user.id, status);

    if (!updatedUser) {
      throw new Error('유저 상태변경 실패');
    }

    return user;
  },
};
