/*function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerMenu").classList.toggle("open");
}


const x = document.getElementById("hamburgerMenu");
x.onclick = toggleMenu;*/
const hb = document.querySelector('#hamburgerBtn');
const pn = document.querySelector('#primaryNav');

hb.addEventListener('click', () => {
    hb.classList.toggle('open');
    pn.classList.toggle('open');
});