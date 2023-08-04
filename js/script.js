var pacman;
var ghost;
var cookie;
var pacmanX = 0;
var pacmanY = 0;

window.addEventListener("DOMContentLoaded", function () {
  pacman = document.getElementById("pacman");
  ghost = document.getElementById("ghost");
  cookie = document.getElementById("cookie");

  function resetPacmanPosition() {
    pacmanX = 0;
    pacmanY = 0;
    pacman.style.left = pacmanX + "px";
    pacman.style.top = pacmanY + "px";
  }

  function isColliding(firstElement, secondElement) {
    var firstElementPosition = firstElement.getBoundingClientRect();
    var secondElementPosition = secondElement.getBoundingClientRect();

    return (
      firstElementPosition.left + 5 < secondElementPosition.right &&
      firstElementPosition.right - 5 > secondElementPosition.left &&
      firstElementPosition.top + 5 < secondElementPosition.bottom &&
      firstElementPosition.bottom - 5 > secondElementPosition.top
    );
  }

  window.addEventListener("keydown", function (event) {
    var collidedWithGhost = isColliding(pacman, ghost);
    var collidedWithCookie = isColliding(pacman, cookie);

    if (collidedWithGhost) {
      alert("Perdiste la partida");
      resetPacmanPosition();
    } else if (collidedWithCookie) {
      alert("Ganaste la partida");
      resetPacmanPosition();
    } else {
      if (event.key === "ArrowLeft") {
        pacmanX -= 5;
      } else if (event.key === "ArrowRight") {
        pacmanX += 5;
      } else if (event.key === "ArrowUp") {
        pacmanY -= 5;
      } else if (event.key === "ArrowDown") {
        pacmanY += 5;
      }
      pacman.style.left = pacmanX + "px";
      pacman.style.top = pacmanY + "px";
    }
  });
});
