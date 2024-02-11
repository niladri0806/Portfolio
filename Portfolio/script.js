// Personal Portfoli Website From Easy Toturials

// -------------------------About Section Start-------------------------
// Cashing The Elements
let tabLink = document.querySelectorAll(".tab-links");
let tabLinkArray = Array.from(tabLink);
let tabContents = document.querySelectorAll(".tab-contents");
let tabContentsArray = Array.from(tabContents);

tabLinkArray.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    // Removing The Active Class From All The Tab Links
    tabLinkArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    // Adding The Active Class On The Clicked Tab Link
    e.currentTarget.classList.add("active");
    // Adding The Display NONE To All The Tabs Content
    tabContents.forEach((tab) => {
      tab.style.display = "none";
    });
    // Removing The Display NONE From The Selected Tab Content
    document.querySelector(e.currentTarget.dataset.showlink).style.display =
      "block";
  });
});
// -------------------------About Section End-------------------------

// -------------------------Open And Close Menu Start-------------------------
let openMenu = document.querySelector(".fa-bars");
let closeMenu = document.querySelector(".fa-times");
let navLinks = document.querySelector("#header nav ul");

openMenu.onclick = function () {
  navLinks.style.right = "0";
};
closeMenu.onclick = function () {
  navLinks.style.right = "-200px";
};
// -------------------------Open And Close Menu End-------------------------

// -------------------------Scroll To Top Start-------------------------
let scrollBtn = document.getElementById("scroll");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 500) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// -------------------------Scroll To Top End-------------------------
const scriptURL =
  "https://script.google.com/macros/s/AKfycbz1Arh1H78jWd8jVRWoRhLlCFabYmuBOb0YsC2DbiVbrL4AFOzoiVR5whNulXhTm7U8/exec"
const form = document.forms["submit-to-google-sheet"]
const msg = document.getElementById("msg")

form.addEventListener("Submit", (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!"
      setTimeout(function () {msg.innerHTML = ""}, 5000)form.reset()}).catch((error) => console.error("Error!", error.message))})