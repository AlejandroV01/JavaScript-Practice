const nav = document.querySelector('.nav')
const navScroll = document.querySelector('.nav-scroll')
const links = document.querySelector('.links')
const linksScroll = document.querySelector('.links-scroll')
window.addEventListener('scroll', () => {
    if(window.pageYOffset >= 80){
        nav.classList.remove('nav');
        nav.classList.add('nav-scroll');
        links.classList.remove('links');
        links.classList.add('links-scroll');
        console.log(window.pageYOffset);
    } else {
        nav.classList.remove('nav-scroll');
        nav.classList.add('nav');
        links.classList.remove('links-scroll');
        links.classList.add('links');
    }
})