async function createPost() {
  try {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const category = document.getElementById('category').value;

    const postData = { title, content, category };

    const response = await fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: token,
      },
      body: JSON.stringify(postData),
    });

    if (response.status === 400) {
      // 400 Bad Request 에러 처리
      const data = await response.json(); // 에러 응답 데이터 가져오기
      console.error('400 에러:', data.errorMessage);
    }

    if (!response.ok) {
      console.log('응답 에러');
      return;
    }

    const data = await response.json();
    console.log(data);

    alert('게시글 작성 성공!');
  } catch (error) {
    alert(data.errorMessage || '게시글 작성중 에러가 발생했습니다');
    console.log('에러 발생');
  }
}
