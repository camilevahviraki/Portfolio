function showNav() {
  const NavAll = document.getElementById('NavBar1');
  const UnionIcon = document.getElementById('UnionIcon');
  const navClass = document.getElementsByClassName('nav_list');
  const pngList = document.getElementsByClassName('links_png');
  const logo1 = document.querySelector('a');
  const section12 = document.getElementById('p_section12');
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

function displayPrjct(title, description, backgroundUrl, idHtml) {
  const projectDisplay = {
    idHtml,
    title,
    description,
    backgroundUrl,
    popUpText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  };
  const sectionMultiple = document.createElement('div');
  const pSectionM = document.createElement('p');
  const h1SectionM = document.createElement('h2');
  const UlSectionM = document.createElement('ul');
  const li1SectionM = document.createElement('li');
  const li2SectionM = document.createElement('li');
  const li3SectionM = document.createElement('li');
  const btn1SectionM = document.createElement('button');
  const btn2SectionM = document.createElement('button');
  const btn3SectionM = document.createElement('button');
  const btnEnSectionM = document.createElement('button');

  sectionMultiple.classList.add('section_M');
  pSectionM.classList.add('p_sectionM');
  h1SectionM.classList.add('h1_3');
  UlSectionM.classList.add('ul_sectionM');
  li1SectionM.classList.add('li_sectionM');
  li2SectionM.classList.add('li_sectionM');
  li3SectionM.classList.add('li_sectionM');
  btn1SectionM.classList.add('butn_M');
  btn2SectionM.classList.add('butn_M');
  btn3SectionM.classList.add('butn_M');
  btnEnSectionM.classList.add('btn_M_en');
  sectionMultiple.setAttribute('id', `section_m${projectDisplay.idHtml}`);
  UlSectionM.setAttribute('id', `ul_section_m${projectDisplay.idHtml}`);
  pSectionM.setAttribute('id', `pSectionM${projectDisplay.idHtml}`);
  h1SectionM.setAttribute('id', `h1SectionM${projectDisplay.idHtml}`);
  btnEnSectionM.setAttribute('id', `btnEnSectionM${projectDisplay.idHtml}`);

  const sectionProjects = document.getElementById('Sections_M_Container');

  const body = document.querySelector('body');
  const section1 = document.getElementById('section1');
  const MainSectionproject = document.getElementById('my_projects');
  const sectionAbout = document.getElementById('section_aboutMe');
  const contactForm = document.getElementById('contact_form');
  const NavAll2 = document.getElementById('NavBar2');
  const NavAll1 = document.getElementById('NavBar1');

  sectionProjects.appendChild(sectionMultiple);
  sectionMultiple.append(h1SectionM, pSectionM, UlSectionM, btnEnSectionM);
  UlSectionM.append(li1SectionM, li2SectionM, li3SectionM);
  li1SectionM.appendChild(btn1SectionM);
  li2SectionM.appendChild(btn2SectionM);
  li3SectionM.appendChild(btn3SectionM);

  btn1SectionM.innerText = 'Html';
  btn2SectionM.innerText = 'Bootstrap';
  btn3SectionM.innerText = 'Ruby';
  btnEnSectionM.innerText = 'See Project';
  pSectionM.innerText = projectDisplay.description;
  h1SectionM.innerText = projectDisplay.title;

  sectionMultiple.style.background = `linear-gradient(180.45deg, rgba(38, 38, 38, 0) 0.75%, rgba(38, 38, 38, 0.9) 61.94%), url(${projectDisplay.backgroundUrl})`;
  sectionMultiple.style.backgroundSize = '100% 100%';
  btnEnSectionM.addEventListener('click', () => {
    const closePopUp = document.createElement('button');
    const closeImg = document.createElement('img');
    const btn1PopUp = document.createElement('button');
    const btn2PopUp = document.createElement('button');
    const textPopUp = document.createElement('p');
    const titlePopUp = document.createElement('h2');
    const imagePopUp = document.createElement('img');
    const githubIcon = document.createElement('img');
    const liveIcon = document.createElement('img');
    const containerPopUp = document.createElement('div');
    const AlignFlexImg = document.createElement('div');
    const textPopUpDiv = document.createElement('div');
    const btn1P = document.createElement('button');
    const btn2P = document.createElement('button');
    const btn3P = document.createElement('button');
    const ulBtnP = document.createElement('div');
    const titleAndIcon = document.createElement('div');
    const btnsList = document.createElement('div');

    const textbtn1 = document.createElement('p');
    const textbtn2 = document.createElement('p');

    closeImg.src = 'images/HideNavIcon.png';
    imagePopUp.src = 'images/ImagePopUp.png';
    liveIcon.src = 'images/IconLivePopUp.png';
    githubIcon.src = 'images/GithubPopUp.png';

    btnsList.classList.add('btns_List');
    closeImg.classList.add('close_popUp');
    closePopUp.classList.add('btn1_popUp');
    btn1PopUp.classList.add('btn1_popUp');
    btn2PopUp.classList.add('btn1_popUp');
    textPopUp.classList.add('p_popUp');
    titlePopUp.classList.add('h1_popUp');
    imagePopUp.classList.add('img_popUp');
    githubIcon.classList.add('icon_popUp');
    liveIcon.classList.add('icon_popUp');
    containerPopUp.classList.add('container_popUp');
    AlignFlexImg.classList.add('Align_FlexImg');
    textPopUpDiv.classList.add('q1');
    btn1P.classList.add('q2');
    btn2P.classList.add('q2');
    btn3P.classList.add('q2');
    ulBtnP.classList.add('ul_btnP');
    textbtn1.classList.add('text_btn');
    textbtn2.classList.add('text_btn');
    titleAndIcon.classList.add('titile_and_icon');

    body.appendChild(containerPopUp);
    containerPopUp.append(titleAndIcon, ulBtnP, AlignFlexImg);
    titleAndIcon.append(closeImg, titlePopUp);
    ulBtnP.append(btn1P, btn2P, btn3P);
    AlignFlexImg.append(imagePopUp, textPopUpDiv);
    textPopUpDiv.append(textPopUp, btnsList);
    btnsList.append(btn1PopUp, btn2PopUp);
    btn1PopUp.append(textbtn1, liveIcon);
    btn2PopUp.append(textbtn2, githubIcon);

    btn1P.innerText = 'Html';
    btn2P.innerText = 'Bootstrap';
    btn3P.innerText = 'Ruby on Rails';
    textbtn1.textContent = 'See live';
    textbtn2.textContent = 'See Source';
    textPopUp.innerText = projectDisplay.popUpText;
    titlePopUp.innerText = projectDisplay.title;

    section1.style.filter = 'blur(8px)';
    MainSectionproject.style.filter = 'blur(8px)';
    sectionAbout.style.filter = 'blur(8px)';
    contactForm.style.filter = 'blur(8px)';
    NavAll2.style.filter = 'blur(8px)';
    NavAll1.style.filter = 'blur(8px)';

    NavAll1.style.pointerEvents = 'none';
    NavAll2.style.pointerEvents = 'none';
    section1.style.pointerEvents = 'none';
    MainSectionproject.style.pointerEvents = 'none';
    sectionAbout.style.pointerEvents = 'none';
    contactForm.style.pointerEvents = 'none';

    closeImg.addEventListener('click', () => {
      containerPopUp.style.display = 'none';
      section1.style.filter = 'none';
      MainSectionproject.style.filter = 'none';
      sectionAbout.style.filter = 'none';
      contactForm.style.filter = 'none';
      NavAll1.style.filter = 'none';
      NavAll2.style.filter = 'none';
      NavAll1.style.filter = 'all';
      NavAll2.style.filter = 'all';
      section1.style.pointerEvents = 'all';
      MainSectionproject.style.pointerEvents = 'all';
      sectionAbout.style.pointerEvents = 'all';
      contactForm.style.pointerEvents = 'all';
    });
  });

  if (window.screen.width > 767) {
    btnEnSectionM.style.display = 'none';
    sectionMultiple.addEventListener('mouseover', () => {
      btnEnSectionM.style.display = 'block';
    });

    sectionMultiple.addEventListener('mouseleave', () => {
      btnEnSectionM.style.display = 'none';
    });
  } else {
    btnEnSectionM.style.display = 'block';
  }
}

displayPrjct();
