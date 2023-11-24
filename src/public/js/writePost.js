async function createPost() {
  try {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const postData = { title, content };

    const response = await fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    const data = await response.json();

    if (response.status === 201) {
      alert('게시글 작성 성공!');
    } else {
      alert(data.errorMessage || '게시글 작성 성공!');
    }
  } catch (error) {
    alert('게시글 작성중 에러가 발생했습니다');
    console.log(error);
  }
}
