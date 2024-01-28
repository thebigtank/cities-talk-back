// Selecting DOM elements
const cursor = document.querySelector(".custom-cursor");
const logo = document.querySelector(".logo-area .logo");
const menuItems = document.querySelectorAll(".header-menu .menu .menu-item");
const hamburger = document.querySelector(".hamburger");

// Adding event listeners for cursor movement
document.addEventListener("mousemove", updateCursorPosition);

// Adding event listeners for logo, hamburger, and menu items
logo.addEventListener("mouseenter", handleHover);
logo.addEventListener("mouseleave", handleUnhover);

hamburger.addEventListener("mouseenter", handleHover);
hamburger.addEventListener("mouseleave", handleUnhover);

menuItems.forEach(function(item) {
    item.addEventListener("mouseenter", handleHover);
    item.addEventListener("mouseleave", handleUnhover);
});

// Function to update cursor position based on mouse movement
function updateCursorPosition(e) {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
}

// Function to handle cursor hover effect
function handleHover() {
    cursor.classList.remove("cursor-scale-down");
    cursor.classList.add("cursor-scale-up");
}

// Function to handle cursor unhover effect
function handleUnhover() {
    cursor.classList.remove("cursor-scale-up");
    cursor.classList.add("cursor-scale-down");
}
