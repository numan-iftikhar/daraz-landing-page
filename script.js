const navbar = document.querySelector(".navbar");
const header = document.querySelector("#header");
const loadMoreBtn = document.querySelector(".btn-load-more");
const loadMoreDiv = document.querySelector(".load-more-div");

function scrollFunc() {
  let scrollValue = window.scrollY;

  if (scrollValue > 100) {
    navbar.classList.add("nav-height");
    // navbar.classList.add("hidden");
    header.classList.add("hidden");
    // header.classList.add("nav-height")
  }
}

window.addEventListener("scroll", scrollFunc);

// slide show
var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide() {
  if (index < 0) {
    index = slides.length - 1;
  }

  if (index > slides.length - 1) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  dot[index].classList.add("active");

  index++;

  setTimeout(changeSlide, 2000);
}

changeSlide();

// btn-load-more
loadMoreBtn.addEventListener("click", () => {
  loadMoreDiv.style.display = "flex";
});

// Counter
// Set the date we're counting down to
let countDownDate = new Date("Jan 2, 2026 15:37:25").getTime();

// Update the count down every 1 second
let intervalID = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();
  // Find the distance between now and the count down date
  let difference = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (difference < 0) {
    clearInterval(intervalID);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
