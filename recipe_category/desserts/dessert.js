// ===== Toggle menu icon and navbar =====
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.nav-bar');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('show-nav');
    menuIcon.classList.toggle('active');
});

  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    setTimeout(() => {
      loader.style.display = "none";
    }, 2000); // 2 seconds delay before hiding
  });


// ===== Recipe Search =====
const searchInput = document.querySelector('.search-box input');
const recipeCards = document.querySelectorAll('.recipe-card');
const recipeSection = document.querySelector('.recipe-section');

let noResult = document.querySelector('.no-result');
if (!noResult) {
    noResult = document.createElement('div');
    noResult.classList.add('no-result');
    noResult.textContent = '😔 Sorry, no matching recipe found!';
    noResult.style.textAlign = 'center';
    noResult.style.fontSize = '20px';
    noResult.style.color = 'red';
    noResult.style.marginTop = '20px';
    noResult.style.display = 'none';
    recipeSection.parentElement.appendChild(noResult);
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    let found = false;

    recipeCards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = 'flex';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });

    noResult.style.display = found ? 'none' : 'block';
});

// ===== Scroll to Top Button =====
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

// pop up functionality start

  window.onload = function () {
    const modal = document.getElementById("welcomeModal");
    const closeBtn = document.querySelector(".close-btn");

    setTimeout(() => {
        modal.style.display = "flex"; // show modal
    
    }, 3000);

    closeBtn.onclick = function () {
      modal.style.display = "none";
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  };

// pop up functionality end