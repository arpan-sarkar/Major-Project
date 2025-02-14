document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navList = document.querySelector(".nav-bar");

    menuIcon.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
});

let footerText = document.querySelector("footer")
footerText.textContent = "© 2025 all right reserved"