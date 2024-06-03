const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById('nav');

menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  
})