let block = document.getElementById("block");

let hole = document.getElementById("hole");

let character = document.getElementById("character");

let jumping = 0;

hole.addEventListener('animationiteration', () => {
  let random = -((Math.random() * 300) + 150);
  hole.style.top = random + "px";
});
setInterval(function () {
  let characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  if (jumping == 0) {

    character.style.top = (characterTop + 3) + "px";
  }
}, 10);
function jump() {
  jumping = 1;
  let jumpCount = 0;
  let jumpInterval = setInterval (function () {
    let characterTop =
      parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if ((character > 6) && (counter < 100)) {
      character.style.top = (characterTop - 5) + "px";
    }
    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
  },10);
}