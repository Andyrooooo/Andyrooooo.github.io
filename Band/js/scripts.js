function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerMenu").classList.toggle("open");
}


const x = document.getElementById("hamburgerMenu");
x.onclick = toggleMenu;

