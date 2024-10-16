const player = document.getElementById("player");
const beyonce = document.getElementById("beyonce");
const gameArea = document.getElementById("game-area");

let playerPosition = { x: 100, y: 100 };
let beyoncePosition = { x: 400, y: 400 };

const playerSpeed = 40;
const beyonceSpeed = 3;

gameArea.addEventListener('mousemove', (event) => {
  
    const rect = gameArea.getBoundingClientRect();
    playerPosition.x = event.clientX - rect.left - 25; 
    playerPosition.y = event.clientY - rect.top - 25;  

    // Controlar que el jugador no se salga del área
    if (playerPosition.x < 0) playerPosition.x = 0;
    if (playerPosition.x > gameArea.clientWidth - 50) playerPosition.x = gameArea.clientWidth - 50;
    if (playerPosition.y < 0) playerPosition.y = 0;
    if (playerPosition.y > gameArea.clientHeight - 50) playerPosition.y = gameArea.clientHeight - 50;

    updatesPositions();
});




// version teclas-----

//window.addEventListener('keydown', (event) => {
 //   switch (event.key) {
   //     case 'ArrowUp':
     //       if (playerPosition.y > 0) playerPosition.y -= playerSpeed;
       //     break;
        //case 'ArrowDown':
          //  if (playerPosition.y < gameArea.clientHeight - 50) playerPosition.y += playerSpeed;
           // break;
        //case 'ArrowLeft':
          //  if (playerPosition.x > 0) playerPosition.x -= playerSpeed;
           // break;
        //case 'ArrowRight':
          //  if (playerPosition.x < gameArea.clientHeight - 50) playerPosition.x += playerSpeed;
            //break;
   // }


function moveBeyonce() {
    if (beyoncePosition.x < playerPosition.x) {
        beyoncePosition.x += beyonceSpeed;

    } else if (beyoncePosition.x > playerPosition.x) {
        beyoncePosition.x -= beyonceSpeed
    }

    if (beyoncePosition.y < playerPosition.y) {
        beyoncePosition.y += beyonceSpeed;

    } else if (beyoncePosition.y > playerPosition.y) {
        beyoncePosition.y -= beyonceSpeed;
    }
    updatesPositions();
    checkCollision();
}

function updatesPositions() {
    player.style.transform = `translate(${playerPosition.x}px, ${playerPosition.y}px)`;
    beyonce.style.transform = `translate(${beyoncePosition.x}px, ${beyoncePosition.y}px)`;
}

function checkCollision() {
    if (Math.abs(playerPosition.x - beyoncePosition.x) < 50 &&
        Math.abs(playerPosition.y - beyoncePosition.y) < 50) {
        alert('Beyonce acabo contigo u_u');
        playerPosition = { x: 100, y: 100 }
        beyoncePosition = { x: 300, y: 300 }

    }
}

function gameLoop(){
    moveBeyonce();
    requestAnimationFrame(gameLoop)
}

gameLoop();