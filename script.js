// Typewriter Effect Code (Already Present)
const typewriter = document.getElementById('typewriter');
const string = ["Welcome to Our School!", "We provide quality education!", "Join us for a bright future."];

let index = 0;
let stringIndex = 0;
let currentString = "";

function type() {
    if (stringIndex < string[index].length) {
        currentString += string[index][stringIndex];
        typewriter.textContent = currentString;
        stringIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (stringIndex > 0) {
        currentString = currentString.slice(0, -1);
        typewriter.textContent = currentString;
        stringIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % string.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});

// // Typewriter Effect using Typed.js
// const options = {
//     strings: ["Welcome to Our School!", "We provide quality education!", "Join us for a bright future."],
//     typeSpeed: 60,
//     backSpeed: 30,
//     backDelay: 1500,
//     loop: true
// };

// const typewriter = new Typed("#typewriter", options);

// Dropdown Toggle for Course Details
const courseButtons = document.querySelectorAll('.more-info-btn');

courseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const courseItem = button.closest('.course-item');
        const courseDetails = courseItem.querySelector('.course-details');
        courseDetails.classList.toggle('show-details'); // Toggle visibility of the details
    });
});

// let currentIndex = 0;
// const slides = document.querySelectorAll('.testimonial-card');
// const totalSlides = slides.length;
// const prevButton = document.querySelector('.prev-btn');
// const nextButton = document.querySelector('.next-btn');
// // Function to update the position of the carousel
// function updateCarousel() {
//     const offset = -currentIndex * 100; // Move the slider by 100% (full width)
//     document.querySelector('.testimonial-slider').style.transform = `translateX(${offset}%)`;
// }

// // Next button functionality
// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % totalSlides; // Loop to the first card when at the end
//     updateCarousel();
// });

// // Previous button functionality
// prevButton.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to the last card when at the beginning
//     updateCarousel();
// });


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// Toggle Navigation Menu on Mobile
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

// Toggle the 'show' class on the navigation menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// Shrink the navigation bar when scrolling
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});
