import { Request } from 'express';
import visitorRepository from '../repositories/visitor';

export default {
  // 방명록 생성
  createVisitor: async (req: Request) => {
    const { userId, title, content, password, isPrivate } = req.body;

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
  getAllVisitors: async (req: Request) => {
    const page = parseInt(req.query.page) || 1;
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
  getVisitorById: async (req: Request) => {
    const id = req.params.id;
    const visitor = await visitorRepository.getVisitorById(id);
    return visitor;
  },

  // 방명록 비밀번호 체크
  visitorPasswordCheck: async (req: Request) => {
    const id = req.params.id;
    const { password } = req.body;

    if (!password) {
      throw new Error('비밀번호를 입력해주세요.');
    }

    const visitor = await visitorRepository.findById(id);

    if (visitor.password !== password) {
      throw new Error('비밀번호가 일치하지 않습니다.');
    }

    return;
  },

  // 방명록 업데이트
  updateVisitor: async (req: Request) => {
    const id = req.params.id;
    const { title, content } = req.body;

    const updatedVisitor = await visitorRepository.updateVisitor(id, title, content);
    return updatedVisitor;
  },

  // 방명록 수정
  patch: async (req: Request) => {
    const { id } = req.params;
    const userId = req.user.userId;
    const { title, content } = req.body;
    const post = await visitorRepository.findById(id);

    if (post.userId !== userId) {
      throw new Error('수정 권한이 없습니다.');
    }

    const updatedpost = await visitorRepository.patch(id, title, content);
    return updatedpost;
  },

  // 방명록 삭제
  deleteVisitor: async (req: Request) => {
    const id = req.params.id;
    const userId = req.user.userId;
    const visitor = await visitorRepository.findById(id);

    if (visitor.userId !== userId) {
      throw new Error('삭제 권한이 없습니다.');
    }

    const deletedVisitor = await visitorRepository.deleteVisitor(id);
    return deletedVisitor;
  },
};
