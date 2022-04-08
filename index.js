function showNav() {
  const NavAll = document.getElementById('NavBar1');
  const UnionIcon = document.getElementById('UnionIcon');
  const navClass = document.getElementsByClassName('nav_list');
  const pngList = document.getElementsByClassName('links_png');
  const logo1 = document.getElementById('logo1');
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
}

showNav();
hideNav();

function displayPrjct(title, description, popUpText, backgroundUrl, idHtml) {
  const sectionProjects = document.getElementById('Sections_M_Container');
  const body = document.querySelector('body');
  const section1 = document.getElementById('section1');
  const MainSectionproject = document.getElementById('my_projects');
  const sectionAbout = document.getElementById('section_aboutMe');
  const contactForm = document.getElementById('contact_form');
  const NavAll2 = document.getElementById('NavBar2');
  const NavAll1 = document.getElementById('NavBar1');

  const AllTags = [
    {
      type: 'section',
      name: 'sectionMultiple',
      class: 'section_M',
      id: `section_m${idHtml}`,
    },
    {
      type: 'p',
      name: 'pSectionM',
      class: 'p_sectionM',
      texte: `${description}`,
      id: `pSectionM${idHtml}`,
    },
    {
      type: 'h2',
      name: 'h1SectionM',
      class: 'h1_3',
      texte: `${title}`,
      id: `h1SectionM${idHtml}`,
    },
    {
      type: 'ul',
      name: ' UlSectionM',
      class: 'ul_sectionM',
      id: `ul_section_m${idHtml}`,
    },
    {
      name: 'li1SectionM',
      class: 'li_sectionM',
      type: 'li',
    },
    {
      name: 'li2SectionM',
      class: 'li_sectionM',
      type: 'li',
    },
    {
      name: 'li3SectionM',
      class: 'li_sectionM',
      type: 'li',
    },
    {
      name: 'btn1SectionM',
      class: 'butn_M',
      type: 'button',
      texte: 'Html',
    },
    {
      name: 'btn2SectionM',
      class: 'butn_M',
      type: 'button',
      texte: 'Bootstrap',
    },
    {
      name: 'btn3SectionM',
      class: 'butn_M',
      type: 'button',
      texte: 'Ruby',
    },
    {
      name: 'btnEnSectionM',
      class: 'btn_M_en',
      type: 'button',
      texte: 'See project',
      id: `btnEnSectionM${idHtml}`,
    },
    {
      name: 'btnEnSectionMDesk',
      class: 'btn_M_enDesk',
      type: 'button',
      texte: 'See project',
      id: `btnEnSectionMDesk${idHtml}`,
    },
  ];

  function createEveryTag() {
    const output = [];
    for (let i = 0; i < AllTags.length; i += 1) {
      AllTags[i].name = document.createElement(AllTags[i].type);
      AllTags[i].name.classList.add(AllTags[i].class);

      if (Object.prototype.hasOwnProperty.call(AllTags[i], 'id')) {
        AllTags[i].name.setAttribute('id', AllTags[i].id);
      }

      if (Object.prototype.hasOwnProperty.call(AllTags[i], 'texte')) {
        AllTags[i].name.innerText = AllTags[i].texte;
      }

      output.push(AllTags[i].name);
    }

    return output;
  }
  let myTags = {};
  myTags = createEveryTag();

  const projectDisplay = {
    idHtml,
    title,
    description,
    backgroundUrl,
    popUpText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  };
  const btnEnSectionMDesk = myTags[11];
  const sectionMultiple = myTags[0];
  sectionProjects.appendChild(myTags[0]);
  myTags[0].append(myTags[2], myTags[1], myTags[3], myTags[10], myTags[11]);
  myTags[3].append(myTags[4], myTags[5], myTags[6]);
  myTags[4].appendChild(myTags[7]);
  myTags[5].appendChild(myTags[8]);
  myTags[6].appendChild(myTags[9]);

  myTags[0].style.background = `linear-gradient(180.45deg, rgba(38, 38, 38, 0) 0.75%, rgba(38, 38, 38, 0.9) 61.94%), url(${projectDisplay.backgroundUrl})`;
  myTags[0].style.backgroundSize = '100% 100%';

  function OpenPopUp() {
    const MyPopUpTags = [
      {
        name: 'btnsList',
        class: 'btns_List',
        type: 'div',
      },
      {
        name: 'closeImg',
        class: 'close_popUp',
        type: 'img',
        src: 'images/HideNavIcon.png',
      },
      {
        name: 'closePopUp',
        class: 'btn1_popUp',
        type: 'button',
      },
      {
        name: 'btn1PopUp',
        class: 'btn1_popUp',
        type: 'button',
      },
      {
        name: 'btn2PopUp',
        class: 'btn1_popUp',
        type: 'button',
      },
      {
        name: 'textPopUp',
        class: 'p_popUp',
        type: 'p',
        texte: `${popUpText}`,
      },
      {
        name: 'titlePopUp',
        class: 'h1_popUp',
        type: 'h2',
        texte: `${title}`,
      },
      {
        name: 'imagePopUp',
        class: 'img_popUp',
        type: 'img',
        src: 'images/ImagePopUp.png',
      },
      {
        name: 'githubIcon',
        class: 'icon_popUp',
        type: 'img',
        src: 'images/GithubPopUp.png',
      },
      {
        name: 'liveIcon',
        class: 'icon_popUp',
        type: 'img',
        src: 'images/IconLivePopUp.png',
      },
      {
        name: 'containerPopUp',
        class: 'container_popUp',
        type: 'div',
      },
      {
        name: 'AlignFlexImg',
        class: 'Align_FlexImg',
        type: 'div',
      },
      {
        name: 'textPopUpDiv',
        class: 'q1',
        type: 'div',
      },
      {
        name: 'btn1P',
        class: 'q2',
        type: 'button',
        texte: 'Html',
      },
      {
        name: 'btn2P',
        class: 'q2',
        type: 'button',
        texte: 'Bootstrap',
      },
      {
        name: 'btn3P',
        class: 'q2',
        type: 'button',
        texte: 'Ruby on Rails',
      },
      {
        name: 'ulBtnP',
        class: 'ul_btnP',
        type: 'div',
      },
      {
        name: 'textbtn1',
        class: 'text_btn',
        type: 'p',
        texte: 'See live',
      },
      {
        name: 'textbtn2',
        class: 'text_btn',
        type: 'p',
        texte: 'See source',
      },
      {
        name: 'titleAndIcon',
        class: 'titile_and_icon',
        type: 'div',
      },

    ];

    function createPopUpTags() {
      const output = [];
      for (let i = 0; i < MyPopUpTags.length; i += 1) {
        MyPopUpTags[i].name = document.createElement(MyPopUpTags[i].type);
        MyPopUpTags[i].name.classList.add(MyPopUpTags[i].class);

        if (Object.prototype.hasOwnProperty.call(MyPopUpTags[i], 'id')) {
        // check if there is Id
          MyPopUpTags[i].name.setAttribute('id', MyPopUpTags[i].id);
        }

        if (Object.prototype.hasOwnProperty.call(MyPopUpTags[i], 'src')) {
          MyPopUpTags[i].name.src = MyPopUpTags[i].src;
        }// Check if theres Src

        if (Object.prototype.hasOwnProperty.call(MyPopUpTags[i], 'texte')) {
        // Check if there is innertext
          MyPopUpTags[i].name.innerText = MyPopUpTags[i].texte;
        }

        output.push(MyPopUpTags[i].name);
      }

      return output;
    }

    let popUpTagsArray = {};
    popUpTagsArray = createPopUpTags();

    // Up here the function
    const containerPopUp = popUpTagsArray[10];

    body.appendChild(popUpTagsArray[10]);
    popUpTagsArray[10].append(popUpTagsArray[19], popUpTagsArray[16], popUpTagsArray[11]);
    popUpTagsArray[19].append(popUpTagsArray[1], popUpTagsArray[6]);
    popUpTagsArray[16].append(popUpTagsArray[13], popUpTagsArray[14], popUpTagsArray[15]);
    popUpTagsArray[11].append(popUpTagsArray[7], popUpTagsArray[12]);
    popUpTagsArray[12].append(popUpTagsArray[5], popUpTagsArray[0]);
    popUpTagsArray[0].append(popUpTagsArray[2], popUpTagsArray[3]);
    popUpTagsArray[2].append(popUpTagsArray[17], popUpTagsArray[9]);
    popUpTagsArray[3].append(popUpTagsArray[18], popUpTagsArray[8]);

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

    popUpTagsArray[1].addEventListener('click', () => {
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
  }

  myTags[10].addEventListener('click', OpenPopUp);
  myTags[11].addEventListener('click', OpenPopUp);

  sectionMultiple.addEventListener('mouseover', () => {
    btnEnSectionMDesk.style.display = 'block';
  });

  sectionMultiple.addEventListener('mouseleave', () => {
    btnEnSectionMDesk.style.display = 'none';
  });
}

function wrapProjectsCards() {
  const cards = [
    {
      title: 'Profesional Art Printing Data More',
      description:
        'Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type',
      popUptext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      backgroundUrl: './images/portfolioBackground.png',
    },
    {
      title: 'Data Dashboard Healthcare',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys',
      popUptext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      backgroundUrl: './images/portfolioBackground.png',
    },
    {
      title: 'Website Protfolio',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
      popUptext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      backgroundUrl: './images/portfolioBackground.png',
    },
    {
      title: 'Profesional Art Printing Data More',
      description:
        'Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type',
      popUptext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      backgroundUrl: './images/portfolioBackground.png',
    },
    {
      title: 'Data Dashboard Healthcare',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys',
      popUptext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      backgroundUrl: './images/portfolioBackground.png',
    },
    {
      title: 'Website Protfolio',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
      popUptext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
      backgroundUrl: './images/portfolioBackground.png',
    },
  ];

  for (let a = 0; a < cards.length; a += 1) {
    const titleCard = cards[a].title;
    const descriptionCard = cards[a].description;
    const textPopUpCard = cards[a].popUptext;
    const htmlIdCard = a + 1;
    const backgroundCard = cards[a].backgroundUrl;

    displayPrjct(titleCard, descriptionCard, textPopUpCard, backgroundCard, htmlIdCard);
  }
}

wrapProjectsCards();

// Get storage
if (localStorage.length !== 0) {
  const valuesStored = JSON.parse(
    localStorage.getItem('formValues'),
  );

  console.log('Items fund');
  document.getElementById('name').value = valuesStored.name;
  document.querySelector('#Mail_Input').value = valuesStored.email;
  document.getElementById('text_arr').value = valuesStored.message;
} else {
  console.log('no item fund!');
}
// End get storage
function val() {
  const Inputmail = document.querySelector('#Mail_Input');
  const mailVal = Inputmail.value;
  const nameVal = document.getElementById('name').value;
  const textVal = document.getElementById('text_arr').value;
  const messageErr = document.getElementById('error_message');

  // here localStorage

  const formStorage = {
    name: '',
    email: '',
    message: '',
  };
  // UpHereLocalStorage

  if (textVal <= 1 || nameVal <= 1 || mailVal <= 1) {
    messageErr.textContent = 'Please, all fields are required!';
    messageErr.style.color = 'brown';
    return false;
  }
  if (Inputmail.value !== Inputmail.value.toLowerCase()) {
    messageErr.textContent = 'Please, use lowercases letters!';
    messageErr.style.color = 'blue';
    return false;
  }
  messageErr.textContent = 'Well done!';
  messageErr.style.color = 'green';

  // Insert localstorage values

  formStorage.name = nameVal;
  formStorage.email = mailVal;
  formStorage.message = textVal;

  localStorage.setItem('formValues', JSON.stringify(formStorage));
  console.log(JSON.stringify(formStorage));

  setTimeout(() => {
    messageErr.textContent = 'Well done!';
  }, 600);
  return true;
}

val();
