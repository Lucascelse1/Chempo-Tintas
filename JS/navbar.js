const menuBtn = document.querySelector('.menu-btn');
const navUl = document.querySelector('.nav-ul');

menuBtn.addEventListener('click', function () {
  navUl.classList.toggle('show');
});