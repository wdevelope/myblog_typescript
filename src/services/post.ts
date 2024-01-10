import postRepository from '../repositories/post';
import Post from '../database/models/post';

export default {
  // 게시글 생성
  createPost: async (userId: number, title: string, content: string, subCategoryName: string): Promise<Post> => {
    const subCategoryInfo = await postRepository.getSubCategory(subCategoryName);

    if (!subCategoryInfo) {
      throw new Error('서브카테고리가 존재하지 않습니다.');
    }

    const newpost = await postRepository.createPost(userId, title, content, subCategoryInfo.id);

    return newpost;
  },

  // 게시글 전체조회 <페이지네이션>
  getAllPost: async (page: number, subCategoryName: string) => {
    const subCategoryInfo = await postRepository.getSubCategory(subCategoryName);

    if (!subCategoryInfo) {
      throw new Error('서브카테고리가 존재하지 않습니다.');
    }

    const pageSize = 15;
    const offset = (page - 1) * pageSize;

    const { posts, totalCount } = await postRepository.getAllPost(offset, pageSize, subCategoryInfo.id);
    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      posts,
      subCategory: subCategoryInfo,
      meta: {
        totalPages,
        currentPage: page,
        totalCount,
      },
    };
  },

  // 게시글 수정
  updatePost: async (postId: number, userId: number, title: string, content: string) => {
    const post = await postRepository.postFindById(postId);
    if (!post || post.userId !== userId) {
      throw new Error('수정 권한이 없습니다.');
    }

    const updatedpost = await postRepository.updatePost(postId, title, content);
    return updatedpost;
  },

  // 게시글 삭제
  deletePost: async (postId: number, userId: number) => {
    const post = await postRepository.postFindById(postId);

    if (!post || post.userId !== userId) {
      throw new Error('삭제 권한이 없습니다.');
    }

    const deletedpost = await postRepository.deletePost(postId);
    return deletedpost;
  },

  // 게시글 상세조회
  getPost: async (postId: number) => {
    const getPost = await postRepository.getPost(postId);

    if (!getPost) {
      throw new Error('게시글이 존재하지 않습니다.');
    }

    if (getPost.dataValues.accessLevel !== 0) {
      throw new Error('비공개된 게시글 입니다.');
    }

    return getPost;
  },
};
