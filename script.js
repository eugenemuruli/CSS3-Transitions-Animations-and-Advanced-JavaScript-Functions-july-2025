// ===============================================
// 🎯 PART 1: CSS3 TRANSITIONS & ANIMATIONS
// Done via CSS — no JS needed here.
// ===============================================

// ===============================================
// 📚 PART 2: JAVASCRIPT FUNCTIONS — SCOPE, PARAMETERS, RETURN VALUES
// ===============================================

// Global scope variable — accessible everywhere
let potionHistory = []; // Tracks what potions have been mixed

/**
 * Mixes a potion and returns its color and timestamp
 * @param {string} color - The color of the potion (blue, red, green)
 * @returns {object} Object containing color and time mixed
 */
function mixPotion(color) {
  // Local scope variables
  const currentTime = new Date().toLocaleTimeString();
  const potion = { color, time: currentTime };

  // Add to global history
  potionHistory.push(potion);

  // Return the mixed potion object
  return potion;
}

/**
 * Checks if a potion has been mixed before
 * @param {string} color - Color to check
 * @returns {boolean} True if already mixed, false otherwise
 */
function hasMixedBefore(color) {
  return potionHistory.some((p) => p.color === color);
}

/**
 * Calculates total number of potions mixed
 * @returns {number} Total count of potions mixed
 */
function getTotalPotionsMixed() {
  return potionHistory.length;
}

/**
 * Resets potion history and clears liquid
 * @returns {string} Confirmation message
 */
function resetLab() {
  potionHistory = [];
  clearPotionLiquid();
  return "🧪 Lab reset! All potions cleared.";
}

// ===============================================
// 🎬 PART 3: COMBINING CSS ANIMATIONS WITH JAVASCRIPT
// ===============================================

// DOM Elements
const potionBottle = document.getElementById("potion-bottle");
const liquid = document.querySelector(".liquid");
const mixBlueBtn = document.getElementById("mix-blue");
const mixRedBtn = document.getElementById("mix-red");
const mixGreenBtn = document.getElementById("mix-green");
const flipCardBtn = document.getElementById("flip-card");
const card = document.querySelector(".card");
const showModalBtn = document.getElementById("show-modal");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

/**
 * Triggers the potion animation by adding/removing CSS classes
 * @param {string} color - Color class to apply to liquid
 */
function animatePotion(color) {
  // Clear previous active states
  liquid.classList.remove("blue", "red", "green", "active");

  // Set new color
  liquid.classList.add(color);

  // Trigger height animation
  setTimeout(() => {
    liquid.style.height = "70%";
    liquid.classList.add("active");
  }, 10);

  // Log the potion mix
  const mixed = mixPotion(color);
  console.log(`✅ Mixed: ${mixed.color} at ${mixed.time}`);
}

/**
 * Flips the recipe card using JS to toggle CSS class
 */
function flipRecipeCard() {
  card.classList.toggle("flipped");
}

/**
 * Shows or hides the modal
 */
function toggleModal() {
  if (modal.style.display === "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
}

/**
 * Clears the potion liquid completely
 */
function clearPotionLiquid() {
  liquid.style.height = "0%";
  liquid.classList.remove("active");
}

// ===============================================
// 🖱️ EVENT LISTENERS — CONNECTING JS TO UI
// ===============================================

// Button event listeners
mixBlueBtn.addEventListener("click", () => animatePotion("blue"));
mixRedBtn.addEventListener("click", () => animatePotion("red"));
mixGreenBtn.addEventListener("click", () => animatePotion("green"));

flipCardBtn.addEventListener("click", flipRecipeCard);

showModalBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);

// Close modal if clicked outside
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Bonus: Reset button (hidden but functional)
// You could add a reset button later like:
// const resetBtn = document.createElement('button');
// resetBtn.textContent = 'Reset Lab';
// resetBtn.className = 'btn';
// resetBtn.onclick = () => alert(resetLab());
// document.querySelector('.controls').appendChild(resetBtn);

// ===============================================
// 💡 DEMONSTRATING FUNCTION SCOPE & RETURN VALUES
// ===============================================

// Example usage of functions with parameters and return values:
console.log("🧪 Potion Lab Initialized!");
console.log(`Total potions mixed: ${getTotalPotionsMixed()}`); // Returns 0 initially

// Let’s test scope awareness:
function demonstrateScope() {
  let localMessage = "I'm only visible inside this function!";
  console.log(localMessage); // ✅ Works
  return localMessage;
}

demonstrateScope(); // Logs local message
// console.log(localMessage); // ❌ ReferenceError — not accessible globally

// Final log after initialization
console.log(
  "🎯 Part 2 Complete: Functions with parameters, scope, and return values are active."
);
