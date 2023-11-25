const user = require('../database/models/user');

module.exports = {
  // 회원가입
  register: async (name, email, hashedPassword) => {
    const userCheck = await user.findOne({ where: { email } });

    if (userCheck) {
      throw new Error('이미 존재하는 유저입니다.');
    }

    return await user.create({
      name,
      email,
      password: hashedPassword,
    });
  },

  // 유저 email 찾기
  findUserByEmail: async (email) => {
    return await user.findOne({ where: { email } });
  },

  // 유저 Id 찾기
  findUserById: async (userId) => {
    const userInfo = await user.findOne({
      attributes: ['name', 'email'],
      where: { id: userId },
    });
    return userInfo;
  },

  // 유저 상태 변경
  updateUser: async (userId, status) => {
    const updatedUser = await user.update(
      {
        status: status,
      },
      { where: { id: userId } }
    );
    return updatedUser;
  },
};
