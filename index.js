function showNav() {
  const UnionIcon = document.getElementById('UnionIcon');
  const navClass = document.getElementsByClassName('nav_list');
  const pngList = document.getElementsByClassName('links_png');
  const logo1 = document.querySelector('a');
  const NavAll = document.querySelector('nav');
  const section12 = document.getElementsByClassName('p_section12');
  const hideNav1 = document.getElementById('clickMe2');
  const showNav1 = document.getElementById('clickMe1');
  const navClassIl = document.querySelectorAll('.nav_menu');

  UnionIcon.style.display = 'none';
  logo1.style.display = 'none';
  NavAll.style.height = '100vh';
  NavAll.style.alignItems = 'baseline';
  hideNav1.style.display = 'flex';
  showNav1.style.display = 'none';
  hideNav1.style.top = '12px';

  for (let i = 0; i < navClass.length; i += 1) {
    navClass[i].style.display = 'flex';
    navClass[i].style.padding = '2px 0 0 0';
    section12[i].style.margin = '100vh 0 0 0';
    pngList[i].style.margin = '6px 0 120px 0';
  }

  for (let a = 0; a < navClassIl.length; a += 1) {
    navClassIl[a].style.padding = '16px';
  }

  console.log('NavBar available');
}

function hideNav() {
  const NavAll = document.querySelector('nav');
  const UnionIcon = document.getElementById('UnionIcon');
  const logo = document.querySelector('a');
  const navClass = document.getElementsByClassName('nav_list');
  const pngList = document.getElementsByClassName('links_png');
  const section12 = document.getElementsByClassName('p_section12');
  const hideNav = document.getElementById('clickMe2');
  const showNav = document.getElementById('clickMe1');

  UnionIcon.style.display = 'none';
  logo.style.display = 'flex';
  NavAll.style.alignItems = 'center';
  NavAll.style.height = '48px';
  hideNav.style.display = 'none';
  showNav.style.display = 'flex';

  for (let i = 0; i < navClass.length; i += 1) {
    navClass[i].style.padding = 'calc((100vh - 184px) / 2) 0 0 0';
    section12[i].style.margin = '48px 0 0 0';
    pngList[i].style.margin = '6px 0 6px 0';
    navClass[i].style.display = 'none';
  }

  console.log('NavBar Hiden');
}

showNav();
hideNav();