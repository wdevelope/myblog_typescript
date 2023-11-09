// 로그인 함수
async function login() {
  try {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loginDate = { email, password };

    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginDate),
    });

    if (!response.ok) {
      console.log('응답 에러');
      return;
    }

    const data = await response.json();
    console.log(data);
    alert('로그인 성공');
  } catch (error) {
    console.log('에러 발생');
  }
}

// 회원가입 함수
async function register() {
  try {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const loginDate = { name, email, password, confirmPassword };

    const response = await fetch('/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginDate),
    });

    if (!response.ok) {
      console.log('응답 에러');
      return;
    }

    const data = await response.json();
    console.log(data);
    alert('회원가입 성공');
  } catch (error) {
    console.log('에러 발생');
  }
}
