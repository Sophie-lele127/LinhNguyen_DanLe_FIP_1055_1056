// Mobile Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const hamburgerOptions = document.querySelector('.nav-menu');

// Toggle the menu visibility on hamburger click
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    hamburgerOptions.classList.toggle('active');
});

// This an optional way to close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-menu li a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        hamburgerOptions.classList.remove('active');
    });
});

// Product Carousel 
const productCards = document.querySelectorAll('.product-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0; 
const itemsPerView = 4; 

// Updates visible based on the index
function updateCarousel() {
    productCards.forEach(function (card, index) {
        if (index >= currentIndex && index < currentIndex + itemsPerView) {
        card.classList.remove('hidden');
        } 
        else {
        card.classList.add('hidden');
        }
    });
}

// Initial display
updateCarousel();

// Show next set of items
nextBtn.addEventListener('click', function () {
    if (currentIndex < productCards.length - itemsPerView) {
    currentIndex++;
    updateCarousel();
  }
});

// Show previous set of items
prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
  }
});

// Promo Data (Array of Objects)
const promoData = [
    {
        id: "milk",
        title: "Milk Wave Deal",
        description: "Buy 2 Milk Waves, get 1 free!"
    },
    {
        id: "grape",
        title: "Grape Rush Special",
        description: "Free shipping on 3+ cans"
    },
    {
        id: "peach",
        title: "Peachy Pop Promo",
        description: "10% off Peachy Pop all week!"
    },
    {
        id: "banana",
        title: "Banana Zing Blast",
        description: "Combo: 3 for C$9.99!"
    },
    {
        id: "strawberry",
        title: "Berry Bliss Surprise",
        description: "Get 1 free sticker with 2 cans!"
    }
  ];
  
  // Promo Button Interactivity
  const promoButtons = document.querySelectorAll(".promo-btn");
  
  promoButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
    const id = btn.dataset.id;
    const data = promoData.find(item => item.id === id);
  
    const card = btn.closest(".product-card");
    const popup = card.querySelector(".promo-popup");
  
    // Hide all popups before showing one
    document.querySelectorAll(".promo-popup").forEach(p => p.classList.add("hidden"));
  
    // Show the correct promo content
    if (data) {
        popup.innerHTML = `<strong>${data.title}</strong><br>${data.description}`;
        popup.classList.remove("hidden");
    }
  
        e.stopPropagation(); // Prevent closing immediately
    });
  });
  
  // Close popup when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".promo-btn") && !e.target.closest(".promo-popup")) {
        document.querySelectorAll(".promo-popup").forEach(p => p.classList.add("hidden"));
    }
  });
  
  
  
