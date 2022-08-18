const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');
const navHeader = document.getElementById('navHeader');
const loginLink = navHeader.getElementById('loginLink');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus();
});

if (loginLink) {
  loginLink.addEventListener('click', () => alert('loginLink'));
}
