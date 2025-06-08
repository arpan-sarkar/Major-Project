console.log('Script loaded successfully!');

// ===== Toggle menu icon and navbar =====
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.nav-bar');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('show-nav');
    menuIcon.classList.toggle('active');
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
// ===== Recipe Card Functionality =====
let allRecipes = []; // store all cards here

async function loadFromFiles(filePaths) {
  const cardsArr = [];

  for (const path of filePaths) {
    try {
      const response = await fetch(path);
      const text = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');

      const cards = doc.querySelectorAll('.recipe-card');
      cards.forEach(card => {
        // Fix href as before
        const link = card.querySelector('a');
        if (link) {
          const href = link.getAttribute('href');
          if (href && !href.startsWith('http') && !href.startsWith('/')) {
            const basePath = path.substring(0, path.lastIndexOf('/') + 1);
            const newHref = basePath + href;
            link.setAttribute('href', newHref);
          }
        }
        cardsArr.push(card);
      });
    } catch (err) {
      console.error(`Error loading ${path}:`, err);
    }
  }

  return cardsArr;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function initializeRecipes() {
  const categoryFiles = [
    'recipe_category/breakfast/breakfast-page.html',
    'recipe_category/desserts/dessert.html',
    'recipe_category/dinner/dinner.html',
    'recipe_category/lunch/lunch.html',
    'recipe_category/starter/starter.html',
    'recipe_category/soft-drinks/soft-drinks.html'
  ];

  allRecipes = await loadFromFiles(categoryFiles);

  displayFeaturedRecipes();

  setupSearch();
}

function displayFeaturedRecipes() {
  const featuredSection = document.querySelector('.recipe-section');
  featuredSection.innerHTML = '';

  const selectedCards = shuffleArray(allRecipes.slice()).slice(0, 8);
  selectedCards.forEach(card => {
    featuredSection.appendChild(card.cloneNode(true));
  });
}

function setupSearch() {
  const searchInput = document.querySelector('.search-box input');
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

    if (!query) {
      // If search box empty, show featured recipes again
      noResult.style.display = 'none';
      displayFeaturedRecipes();
      return;
    }

    // Filter allRecipes by title
    const filtered = allRecipes.filter(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      return title.includes(query);
    });

    const featuredSection = document.querySelector('.recipe-section');
    featuredSection.innerHTML = '';

    if (filtered.length === 0) {
      noResult.style.display = 'block';
    } else {
      noResult.style.display = 'none';
      filtered.forEach(card => {
        featuredSection.appendChild(card.cloneNode(true));
      });
    }
  });
}

window.addEventListener('DOMContentLoaded', initializeRecipes);

  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    setTimeout(() => {
      loader.style.display = "none";
    }, 2000); // 2 seconds delay before hiding
  });
