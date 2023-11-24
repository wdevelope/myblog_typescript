document.addEventListener('DOMContentLoaded', () => {
  lifePostRender();
});

// 🎯 일기 게시판 전체 렌더링
async function lifePostRender() {
  try {
    const pageNumber = 1;
    const response = await fetch(`/api/life?page=${pageNumber}`);
    if (!response.ok) {
      console.log('렌더링 에러');
      return;
    }
    console.log(response);
    const data = await response.json();
    const postList = document.querySelector('#post-table tbody');
    data.posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    data.posts.forEach((post, index) => {
      const postIndex = index + 1;
      const row = document.createElement('tr');
      const date = new Date(post.createdAt);
      const formatDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
        .getDate()
        .toString()
        .padStart(2, '0')}`;
      row.innerHTML = `
                      <td>${postIndex}</td>
                      <td><a href="/detailPost?postid=${post.id}" onclick="views(${post.id})">${post.title}</a></td>
                      <td>${post.user.name}</a></td>
                      <td>${formatDate}</td>
                      <td>${post.views}</td>
                    `;
      postList.appendChild(row);
    });
  } catch (error) {
    console.log(error);
  }
}
