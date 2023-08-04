var pacman;
var pacmanX = 0;
var pacmanY = 0;

window.addEventListener("DOMContentLoaded", function () {
  pacman = document.getElementById("pacman");

  window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      pacmanX -= 5;
    } else if (event.key === "ArrowRight") {
      pacmanX += 5;
    } else if (event.key === "ArrowUp") {
      pacmanY -= 5;
    } else if (event.key === "ArrowDown") {
      pacmanY += 5;
    }

    pacman.style.left = pacmanX + "5px";
    pacman.style.top = pacmanY + "5px";
  });
});
