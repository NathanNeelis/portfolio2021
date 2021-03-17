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
projectsWeb.addEventListener('click', subMenuWebToggle)

//ux
const projectsUX = document.getElementById('projectUX');
const menuProjectsUX = document.getElementById('menuProjectUX');
const triangleUX = document.querySelector('.triangleUX');
projectsUX.addEventListener('click', subMenuUXToggle);

function subMenuWebToggle() {
    menuProjectsWeb.classList.toggle('active');
    triangleWeb.classList.toggle('turn');
}

function subMenuUXToggle() {
    menuProjectsUX.classList.toggle('active');
    triangleUX.classList.toggle('turn');
}