// Variables
let count;
let i;

// Changing colors
function starMark(count) {
  for (i = 1; i <= 5; i++) {
    if (i >= count) {
      document.getElementById("star" + i).classList.add("active");
    }
    else {
      document.getElementById("star" + i).classList.remove("active");
    }
  }
}

// Clicking away
window.addEventListener('mouseup', function (event) {
  let stars = document.getElementById('stars').children;
  if (event.target != stars && event.target.parentNode != stars) {
    for (i = 0; i < stars.length; i++) {
      stars[i].classList.remove("active");
    }
  }
});