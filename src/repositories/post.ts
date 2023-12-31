import Post from '../database/models/post';
import User from '../database/models/user';
import subCategory from '../database/models/subCategory';

export default {
  // 게시글 생성
  createPost: async (userId: number, title: string, content: string, subCategoryId: number): Promise<Post> => {
    return await Post.create({
      userId,
      title,
      content,
      subCategoryId,
    });
  },

  // 게시글 전체 조회
  getAllPost: async (offset: number, pageSize: number, subCategoryId: number) => {
    const result = await Post.findAndCountAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: subCategory,
          attributes: ['name'],
        },
      ],
      order: [['createdAt', 'DESC']],
      where: {
        subCategoryId: subCategoryId, // 서브카테고리 ID로 필터링
      },
      offset, // 페이지 시작 위치
      limit: pageSize, // 페이지당 아이템 수
    });

    return {
      posts: result.rows,
      totalCount: result.count,
    };
  },

  //서브카테고리 이름 조회
  getSubCategory: async (subCategoryName: string) => {
    const subCategoryResult = await subCategory.findOne({
      where: { name: subCategoryName },
      attributes: ['id'],
    });
    return subCategoryResult;
  },

  // 게시글 수정
  updatePost: async (id: number, title: string, content: string) => {
    return await Post.update(
      {
        title,
        content,
      },
      {
        where: {
          id: id,
        },
      }
    );
  },

  // 게시글 삭제
  deletePost: async (id: number) => {
    return await Post.destroy({
      where: {
        id,
      },
    });
  },

  // 게시글 상세 조회
  getPost: async (id: number) => {
    return await Post.findByPk(id, {
      include: {
        model: User,
        attributes: ['name', 'status'],
      },
    });
  },

  // 게시글 id 조회
  postFindById: async (id: number) => {
    return await Post.findByPk(id);
  },
};
