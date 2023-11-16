document.addEventListener('DOMContentLoaded', () => {
  lifePostDetail();
});

// 게시글 상세 페이지로 이동하는 함수
async function lifePostDetail() {
  console.log(postId);
  try {
    const response = await fetch(`/api/post/${postId}`);

    if (!response.ok) {
      console.log('렌더링 에러');
      return;
    }

    const data = await response.json();

    document.getElementById('postTitle').innerText = data.title;
    document.getElementById('postContent').innerText = data.content;
  } catch (error) {
    console.error('API 요청 에러:', error);
  }
}
