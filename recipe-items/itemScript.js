// const menuIcon = document.querySelector('#menu-icon');
// const navBar = document.querySelector('.nav-bar');

// menuIcon.addEventListener('click', () => {
//     navBar.classList.toggle('show-nav');
//     menuIcon.classList.toggle('active');
// });

const menuIcon = document.getElementById("menu-icon");
const navBar = document.getElementById("nav-bar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navBar.classList.toggle("active");
});


const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});