const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  const users = {
    'Tendai': '2002',
    'adminn': '5000'
  };

  if (users[username] && users[username] === password) {
    localStorage.setItem('bhsLoggedInUser', username);
    window.location.href = 'dashboard.html';
  } else {
    errorMessage.textContent = 'Invalid username or password';
  }
});

function toggleTheme() {
  const body = document.body;
  if (body.style.backgroundColor === 'black') {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
  } else {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  }
}
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}
