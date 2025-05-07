// const menuIcon = document.querySelector('#menu-icon');
// const navBar = document.querySelector('.nav-bar');

// menuIcon.addEventListener('click', () => {
//     navBar.classList.toggle('show-nav');
//     menuIcon.classList.toggle('active');
// });

// ===== Toggle menu icon and navbar =====
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.nav-bar');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('show-nav');
    menuIcon.classList.toggle('active');
});

// // Dropdown toggle for Recipes
// const dropdownToggle = document.querySelector('.dropdown-toggle');
// const hasDropdown = document.querySelector('.has-dropdown');

// dropdownToggle.addEventListener('click', (e) => {
//     e.stopPropagation();
//     hasDropdown.classList.toggle('active');
// });

// // Close dropdown if clicked outside
// document.addEventListener('click', () => {
//     hasDropdown.classList.remove('active');
// });

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

let fotter = document.querySelector('footer');
fotter.textContent = "© 2025 The Foodie Haven. All rights reserved.";



