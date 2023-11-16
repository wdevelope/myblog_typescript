document.addEventListener('DOMContentLoaded', () => {
  studyPostRender();
});

// 🎯 공부 게시판 전체 렌더링
async function studyPostRender() {
  try {
    const response = await fetch('/api/post/study');

    if (!response.ok) {
      console.log('렌더링 에러');
      return;
    }

    const data = await response.json();
    const postList = document.querySelector('#post-table tbody');

    data.forEach((post, index) => {
      const postIndex = data.length - index;
      const row = document.createElement('tr');
      const date = new Date(post.createdAt);
      const formatDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
        .getDate()
        .toString()
        .padStart(2, '0')}`;
      row.innerHTML = `
                        <td>${postIndex}</td>
                        <td><a href="/detailPost?postid=${post.id}">${post.title}</a></td>
                        <td>${post.user.name}</a></td>
                        <td>${formatDate}</td>
                        <td>100</td>
                      `;
      postList.appendChild(row);
    });
  } catch (error) {
    console.log(error);
  }
}
