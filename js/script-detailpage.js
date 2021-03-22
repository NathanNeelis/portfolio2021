const menuButton = document.getElementById('stickyMenu');
if (menuButton) {
    menuButton.addEventListener('click', menuToggle);
}


function menuToggle() {

    let menu = document.querySelector('.nav');
    menu.classList.toggle('showMenu');

    nextImage();
}


// change adobe images
let menuTrack = true;
const menuImage = document.querySelector('.menuIcon');
let currentPos = 0;
const menuIcons = ['hamburger.svg', 'menu_cross.svg']

function nextImage() {
    if (++currentPos >= menuIcons.length)
        currentPos = 0;

    menuImage.src = '../images/' + menuIcons[currentPos];
}


// show and hide submenu
//web
const projectsWeb = document.getElementById('projectWeb');
const menuProjectsWeb = document.getElementById('menuProjectWeb')
const triangleWeb = document.querySelector('.triangle')


//ux
const projectsUX = document.getElementById('projectUX');
const menuProjectsUX = document.getElementById('menuProjectUX');
const triangleUX = document.querySelector('.triangleUX');




// show submenu
const projectsUXWrap = document.getElementById('projectUXWrap');
const projectsWebWrap = document.getElementById('projectWebWrap');
projectsUX.addEventListener('mouseenter', showProjectUXMenu);
projectsUXWrap.addEventListener('mouseleave', hideProjectUXMenu);
projectsWeb.addEventListener('mouseenter', showProjectMenu);
projectsWebWrap.addEventListener('mouseleave', hideProjectMenu);
projectsUX.addEventListener('click', subMenuUXToggle);
projectsWeb.addEventListener('click', subMenuWebToggle)








function subMenuWebToggle() {
    event.preventDefault();
    menuProjectsWeb.classList.toggle('active');
    triangleWeb.classList.toggle('turn');
}

function subMenuUXToggle() {
    event.preventDefault();
    menuProjectsUX.classList.toggle('active');
    triangleUX.classList.toggle('turn');
}


function showProjectMenu() {
    menuProjectsWeb.classList.add('showSubMenu');
}

function hideProjectMenu() {
    menuProjectsWeb.classList.remove('showSubMenu');
}

function showProjectUXMenu() {
    menuProjectsUX.classList.add('showSubMenu');
}

function hideProjectUXMenu() {
    menuProjectsUX.classList.remove('showSubMenu');
}