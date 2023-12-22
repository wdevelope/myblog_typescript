import User from '../database/models/user';

export default {
  // 회원가입
  register: async (name: string, email: string, hashedPassword: string) => {
    const userCheck = await User.findOne({ where: { email } });

    if (userCheck) {
      throw new Error('이미 존재하는 유저입니다.');
    }

    return await User.create({
      name,
      email,
      password: hashedPassword,
    });
  },

  // 유저 email 찾기
  findUserByEmail: async (email: string) => {
    return await User.findOne({ where: { email } });
  },

  // 로그인 유저 찾기
  findUser: async (email: string) => {
    return await User.findOne({
      where: { email },
      attributes: { exclude: ['password', 'createdAt', 'updatedAt', 'id'] },
    });
  },

  // 유저 Id 찾기
  findUserById: async (userId: number) => {
    const userInfo = await User.findOne({
      attributes: ['name', 'email', 'status'],
      where: { id: userId },
    });
    return userInfo;
  },

  // 유저 상태 변경
  updateUser: async (userId: number, status: string) => {
    const updatedUser = await User.update(
      {
        status: status,
      },
      { where: { id: userId } }
    );
    return updatedUser;
  },
};
