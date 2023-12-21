import visitorRepository from '../repositories/visitor';

export default {
  // 방명록 생성
  createVisitor: async (userId: number, title: string, content: string, password: string, isPrivate: number) => {
    if (isPrivate) {
      if (!password) {
        throw new Error('비밀번호를 입력해주세요.');
      }
    }

    const newVisitor = await visitorRepository.createVisitor(userId, title, content, password, isPrivate);

    if (!newVisitor) {
      throw new Error('방명록 생성 실패');
    }

    return newVisitor;
  },

  // 모든 방명록 조회
  getAllVisitors: async (page: number) => {
    const pageSize = 15;
    const offset = (page - 1) * pageSize;

    const { visitors, totalCount } = await visitorRepository.getAllVisitors(offset, pageSize);
    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      visitors,
      meta: {
        totalPages,
        currentPage: page,
        totalCount,
      },
    };
  },

  // 특정 방명록 조회
  getVisitorById: async (visitorId: number, password: string) => {
    const visitor = await visitorRepository.getVisitorById(visitorId);
    if (!visitor) {
      throw new Error('존재하지않는 방명록입니다.');
    }

    if (visitor.isPrivate && visitor.password !== password) {
      throw new Error('보호된 방명록입니다.');
    }
    return visitor;
  },

  // 방명록 비밀번호 체크
  visitorPasswordCheck: async (visitorId: number, password: string) => {
    if (!password) {
      throw new Error('비밀번호를 입력해주세요.');
    }

    const visitor = await visitorRepository.visitorFindById(visitorId);

    if (!visitor || visitor.password !== password) {
      throw new Error('비밀번호가 일치하지 않습니다.');
    }

    return;
  },

  // 방명록 수정
  updateVisitor: async (visitorId: number, title: string, content: string, userId: number) => {
    const post = await visitorRepository.visitorFindById(visitorId);

    if (!post || post.userId !== userId) {
      throw new Error('수정 권한이 없습니다.');
    }

    const updatedVisitor = await visitorRepository.updateVisitor(visitorId, title, content);
    return updatedVisitor;
  },

  // 방명록 삭제
  deleteVisitor: async (visitorId: number, userId: number) => {
    const visitor = await visitorRepository.visitorFindById(visitorId);

    if (!visitor || visitor.userId !== userId) {
      throw new Error('삭제 권한이 없습니다.');
    }

    const deletedVisitor = await visitorRepository.deleteVisitor(visitorId);
    return deletedVisitor;
  },
};
