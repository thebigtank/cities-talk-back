const cursor = document.querySelector(".custom-cursor");
const logo = document.querySelector(".logo-area .logo");
const menuItems = document.querySelectorAll(".header-menu .menu .menu-item");
const hamburger = document.querySelector(".hamburger");

document.addEventListener("mousemove", updateCursorPosition);

logo.addEventListener("mouseenter", handleHover);
logo.addEventListener("mouseleave", handleUnhover);

hamburger.addEventListener("mouseenter", handleHover);
hamburger.addEventListener("mouseleave", handleUnhover);

menuItems.forEach(function(item) {
    item.addEventListener("mouseenter", handleHover);
    item.addEventListener("mouseleave", handleUnhover);
});

function updateCursorPosition(e) {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
}

function handleHover() {
    cursor.classList.remove("cursor-scale-down");
    cursor.classList.add("cursor-scale-up");
}

function handleUnhover() {
    cursor.classList.remove("cursor-scale-up");
    cursor.classList.add("cursor-scale-down");
}