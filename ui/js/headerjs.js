const navbar_slider = document.getElementById('smallheader');

const drawNav = () => {
  const nav_drawer = document.getElementById('slidenav');
  nav_drawer.classList.toggle('navslidetoggle');
};

if (navbar_slider) {
  navbar_slider.addEventListener('click', drawNav);
}
