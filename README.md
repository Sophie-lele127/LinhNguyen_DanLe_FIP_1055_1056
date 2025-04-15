# LinhNguyen_DanLe_FIP_1055_1056
## Final Integrated Project – Swerve Soda  
**Course:** MMED 1055 & MMED 1056  
**Instructor:** Jake Meloche & Robert Haff  
**Due Date:** April 16, 2025  
**Project Title:** *Swerve Soda – Twist the Taste!*  
**Team Members:** 
- 👨‍💻 **Linh Nguyen** – JavaScript development, HTML, logic, documentation  
- 🎨 **Dan Le** – UI/UX design, CSS animation, branding & SVG assets

---

## ✨ Project Introduction
Swerve is a playful, Gen-Z-inspired soda brand that fuses traditional carbonated drinks with creamy flavours like milk, peach, banana, and more. This Final Integrated Project presents an interactive promotional website that brings the product to life through immersive UI, animations, and coded interactivity.

---

## 🎯 Project Objective

To create a responsive and interactive promotional site for the Swerve brand using HTML, CSS, and JavaScript, with a focus on:
- Mobile-first UI/UX
- Interactive JavaScript elements from arrays or objects
- Custom SVG graphics
- Scalable and reusable code structure
- Semantic HTML and accessible design

---

## 🔧 Technologies Used

- HTML5 (semantic + responsive structure)  
- CSS3 (Grid layout, animations, hover effects)  
- JavaScript (DOM manipulation, arrays, events)  
- SVG (custom icon design)  
- GitHub (branching, merging, version control)

---

##  Key Features

-  Mobile hamburger menu with toggle animation
-  Product carousel with next/prev controls
-  Interactive “View Promo” buttons powered by JS array
-  Custom SVG icons for each flavour
-  Hover animations and UI transitions
-  Fully responsive (mobile-first → desktop scaling)

---

## 👥 Team Responsibilities

| Name            | Role             | Responsibilities                                                                 |
|-----------------|------------------|----------------------------------------------------------------------------------|
| **Dan Le**      | 💡 Designer       | - Logo design and color palette <br> - SVG icon design (Milk, Grape, Peach, Banana, Strawberry) <br> - Layout and UI styling with Grid + animations |
| **Linh Nguyen** | 🛠️ Developer      | - Full HTML page structure <br> - JavaScript functionality for carousel, menu, and promo popup <br> - README.md and documentation <br> - GitHub repo setup and logic branching |
---

## 📁 Folder Structure

- `index.html` – Main homepage  
- `flavours.html` – Product flavour showcase  
- `contact.html` – Contact and reservation form  

- `css/`
  - `grid.css` – Base grid layout  
  - `main.css` – Styling specific to the homepage 
  - `flavours.css` – Styling specific to the flavours page  
  - `contact.css` – Styling specific to the contact page  

- `js/`
  - `main.js` – JavaScript logic for menu toggle, product carousel, and promo popups  

- `images/`
  - **Product Cans (PNG):**  
    - `milk-can.png`  
    - `grape-can.png`  
    - `peach-can.png`  
    - `banana-can.png`  
    - `strawberry-can.png`  

  - **Custom Flavour Icons (SVG):**  
    - `milk.svg`  
    - `grape.svg`  
    - `peach.svg`  
    - `banana.svg`  
    - `strawberry.svg`  

  - **Brand Assets:**  
    - `swerve_logo.svg` – Main logo  
    - `poster.png` – Promotional brand poster  
    - `hero_image.svg` – Hero section illustration  
    - `Linh_Nguyen_Cine...` – Developer image (optional or placeholder) 

- `README.md` – Project summary, code walkthrough (paper plan), and documentation

---

## 🧠 Paper Plan – JavaScript Code Walkthrough
### 1. Hamburger Menu Toggle

#### 🎯 Objective:
To enhance mobile usability by allowing users to toggle the navigation menu using a hamburger icon. Additionally, for better UX, the menu will auto-close once a navigation link is clicked.

---

#### 🧠 JavaScript Code Explanation
### 1. Mobile Hamburger Menu Toggle
```js
const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.nav-menu');
```
Selects the hamburger icon and navigation menu using `document.querySelector().`
**Reference:** [MDN – querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

```js
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
});
```
- Adds a `click` event listener to the hamburger icon.
- `classList.toggle()` adds or removes the `active` class to show or hide the mobile menu.

**Reference:** [MDN – classList.toggle()](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle)  
**Reference:** [MDN – addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

```js 
const navLinks = document.querySelectorAll('.nav-menu li a');
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    hamburger.classList.remove('active');
    hamburgerMenu.classList.remove('active');
  });
});
```
- Closes the menu when any link is clicked by removing the active class.
- Enhances mobile UX to avoid having the menu remain open.

**Reference:** [MDN – forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

### 2. Product Carousel (Horizontal Scroll)
```js
const productCards = document.querySelectorAll('.product-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
```
- Selects all product cards and the navigation buttons.

```js
let currentIndex = 0;
const itemsPerView = 4;
```
- `currentIndex` tracks the first visible card.
- `itemsPerView` sets how many items should be shown at once.

```js
function updateCarousel() {
  productCards.forEach(function (card, index) {
    if (index >= currentIndex && index < currentIndex + itemsPerView) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}
```
- Shows only the range of cards from `currentIndex` to `currentIndex + itemsPerView`.
- Hides the rest using a `.hidden` CSS class.

```js
updateCarousel();
```
- Initial call to make sure the first 4 products are shown when the page loads.

```js
nextBtn.addEventListener('click', function () {
  if (currentIndex < productCards.length - itemsPerView) {
    currentIndex++;
    updateCarousel();
  }
});
```
- Moves the carousel to the next group of products.
- Prevents overflow by checking length.
```js 
prevBtn.addEventListener('click', function () {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});
```
- Moves the carousel back to the previous group.
- Prevents index from going negative.

**Reference:** [LogRocket – Build an Image Carousel from Scratch with Vanilla JavaScript](https://blog.logrocket.com/build-image-carousel-scratch-vanilla-javascript/)

### 3. Promo Data (Array of Objects)
```js
const promoData = [
  { id: "milk", title: "Milk Wave Deal", description: "Buy 2 Milk Waves, get 1 free!" },
  { id: "grape", title: "Grape Rush Special", description: "Free shipping on 3+ cans" },
  { id: "peach", title: "Peachy Pop Promo", description: "10% off Peachy Pop all week!" },
  { id: "banana", title: "Banana Zing Blast", description: "Combo: 3 for C$9.99!" },
  { id: "strawberry", title: "Berry Bliss Surprise", description: "Get 1 free sticker with 2 cans!" }
];
```
- Stores all promo details in a structured, reusable array of objects.
- Each object includes `id`, `title`, and `description`.
### 4. Promo Button Interactivity
```js
const promoButtons = document.querySelectorAll(".promo-btn");
```
- Selects all "View Promo" buttons.

```js
promoButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const id = btn.dataset.id;
    const data = promoData.find(item => item.id === id);
```
When a promo button is clicked:
- Get the `data-id` of the button.
- Use `Array.find()` to match with `promoData`.

**Reference:** [MDN – HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)  
**Reference:** [MDN – Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

```js
    const card = btn.closest(".product-card");
    const popup = card.querySelector(".promo-popup");
```
- Finds the closest product card container.
- Locates the popup element inside that specific card.
```js 
    document.querySelectorAll(".promo-popup").forEach(p => p.classList.add("hidden"));
```
- Hides all other popups before showing the current one.

```js
    if (data) {
      popup.innerHTML = `<strong>${data.title}</strong><br>${data.description}`;
      popup.classList.remove("hidden");
    }

    e.stopPropagation();
  });
});
```
- Injects the content (title + description) into the popup.
- Removes `.hidden` to make it visible.
- `stopPropagation()` prevents the event from bubbling up and auto-closing the popup instantly.

### 5. Close Popups When Clicking Outside
```js
document.addEventListener("click", function (e) {
  if (!e.target.closest(".promo-btn") && !e.target.closest(".promo-popup")) {
    document.querySelectorAll(".promo-popup").forEach(p => p.classList.add("hidden"));
  }
});
```
- If the user clicks anywhere outside the button or popup, all promo popups are hidden again.
- Provides cleaner interaction and avoids overlapping content.

**Reference:** [CSS-Tricks – A Really Nice Way To Handle Popup Information](https://css-tricks.com/a-really-nice-way-to-handle-popup-information/)

---

## 🗂️ GitHub Workflow

### 🔀 Branches Used (Naming Convention)

- `main` → Stable, production-ready code  
- `dev.ln.general` → General development (Linh Nguyen)  
- `dev.ln.script` → JavaScript logic & promo interactivity (Linh Nguyen)  
- `dev.ln.html` → HTML page structure (Linh Nguyen)  
- `dev.ln.readme` → Documentation + README updates (Linh Nguyen)  
- `des.dl.ui` → UI/UX, layout styling (Dan Le)  
- `des.dl.css` → CSS refinement, hover/animation effects (Dan Le)  
- `des.dl.assets` → Visual + SVG icon management (Dan Le)

--- 
## 🛠️ How to Run This Project

1. Clone the repository or download the ZIP  
2. Open the folder in your code editor  
3. Open `index.html` in your browser  
4. Explore the interactive UI:
   - Click "View Promo" buttons to load promo data
   - Use the hamburger menu in mobile view
   - Scroll through the carousel
---
## 👌 Future Improvements

If given more time, we would consider:
- Adding animated transitions to promo popups
- Hosting the site using GitHub Pages or Netlify
- Connecting the contact form to a backend using Firebase or Formspree
- Adding a product filter (by flavour or type)
- Making the carousel infinite-scrollable

---

### ✅ GitHub Best Practices Followed:

- Organized project structure (HTML / CSS / JS / Images)  
- Descriptive, consistent commit messages  
- Clear division of responsibilities via branches  
- Branches merged with review before pushing to `main`  
- Paper plan and documentation tracked through README

---

## 🎯 Learning Outcomes

Throughout this project, we practiced and applied:

- Designing mobile-first interfaces with **CSS Grid and Flexbox**  
- Writing modular and scalable **JavaScript**  
- Creating dynamic UI using **arrays, events, and DOM methods**  
- Implementing lightweight interactivity (carousel, popovers, menu toggles)  
- Using **custom SVG icons** and scalable design assets  
- Working collaboratively using **GitHub branches and pull requests**  
- Writing clear and structured documentation in Markdown

---

## ✅ Conclusion

This Final Integrated Project allowed us to bring together the full scope of what we’ve learned across the semester — from layout and typography to JavaScript logic, user experience, and GitHub collaboration.  

All interactivity was written in **JavaScript**, designed to be readable, scalable, and accessible. Our custom branding, icon set, and mobile-first responsive layout bring the Swerve Soda brand to life in a fun and engaging way.

We’re proud to have built this project from the ground up — and we’re confident in our ability to explain, scale, and build upon every part of this work.

---

## 📜 License

This project is developed solely for educational purposes under the  
**Interactive Media Design** program at **Fanshawe College**.  
All visuals and code are original or free for educational use only.




