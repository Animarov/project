// Проверяем, есть ли зарегистрированные пользователи в localStorage
if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify({}));
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  const users = JSON.parse(localStorage.getItem('users'));

  if (users[username] && users[username] === password) {
    alert('Вход выполнен!');
    window.location.href = 'dashboard.html'; // Перенаправляем
  } else {
    alert('Неверный логин или пароль!');
  }
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;
  const users = JSON.parse(localStorage.getItem('users'));

  if (users[username]) {
    alert('Пользователь уже существует!');
  } else {
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Регистрация успешна!');
  }
});