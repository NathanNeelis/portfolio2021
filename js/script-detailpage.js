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