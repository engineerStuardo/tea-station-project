const navBtn = document.getElementById('nav-btn');
const navBar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');
const navCloseHeader = document.getElementById('navCloseHeader');
const navCloseSkills = document.getElementById('navCloseSkills');
const navCloseAbout = document.getElementById('navCloseAbout');
const navCloseProducts = document.getElementById('navCloseProducts');
const navCloseContact = document.getElementById('navCloseContact');

navBtn.addEventListener('click', () => {
  navBar.classList.add('showNav');
});
navClose.addEventListener('click', () => {
  navBar.classList.remove('showNav');
});

navCloseHeader.addEventListener('click', () => {
  navBar.classList.remove('showNav');
});

navCloseSkills.addEventListener('click', () => {
  navBar.classList.remove('showNav');
});

navCloseAbout.addEventListener('click', () => {
  navBar.classList.remove('showNav');
});

navCloseProducts.addEventListener('click', () => {
  navBar.classList.remove('showNav');
});

navCloseContact.addEventListener('click', () => {
  navBar.classList.remove('showNav');
});
