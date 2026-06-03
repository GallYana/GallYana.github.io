const canvas = document.getElementById("MyCanvas");
const ctx = canvas.getContext("2d");

const imgGirl = new Image();
const imgApple = new Image();

const bX = 100; // начальная позиция девочки
const bY = 100;

let mX = 100; // двигать на 50 вперед, вверх
let mY = 100;

let newX = bX;
let newY = bY;

imgGirl.onload = () => {
  ctx.drawImage(imgGirl, bX, bY, 100, 100);
}

imgGirl.src = "pixel-girl.png";


document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'ArrowLeft':
      console.log('Влево');
      moveLeft();
      break;
    case 'ArrowRight':
      console.log('Вправо');
      moveRight();
      break;

    case 'ArrowUp':
      console.log('Вверх');
      moveUp();
      break;
    case 'ArrowDown':
      console.log('Вниз');
      moveDown();
      break;
  }
});

function moveLeft() {
  ctx.clearRect(newX, newY, 100, 100);

  if (newX - mX >= 0) {
    newX = newX - mX;
  }

  ctx.drawImage(imgGirl, newX, newY, 100, 100);
}

function moveRight() {
  ctx.clearRect(newX, newY, 100, 100);

  if (newX + mX < 1000) {
    newX = newX + mX;
  }

  ctx.drawImage(imgGirl, newX, newY, 100, 100);
}

function moveUp() {
  ctx.clearRect(newX, newY, 100, 100);

  if (newY - mY >= 0) {
    newY = newY - mY;
  }

  ctx.drawImage(imgGirl, newX, newY, 100, 100);
}

function moveDown() {
  ctx.clearRect(newX, newY, 100, 100);

  if (newY + mY < 500) {
    newY = newY + mY;
  }

  ctx.drawImage(imgGirl, newX, newY, 100, 100);
}


const buttonGiveApple = document.querySelector('.give-apple-btn');
const buttonBadTikeApple = document.querySelector('.take-apple-btn')

// Первый способ
// function isClicked() {
//   console.log("click");
// }

// button.onclick = isClicked;

// Второй способ
// button.addEventListener("click", function(e) {
//   console.log("Клик");
// })

// button.addEventListener("click", function(e) {
//   console.log("Клак");
// })

function giveApple() {
  imgApple.onload = () => {
    ctx.drawImage(imgApple, 180, 200, 50, 50);
  }

  imgApple.src = "apple.png";

  console.log("Отдали яблоко");
  // buttonGiveApple.removeEventListener("click", giveApple); //в таком случае сработает только один раз, чтобы сработало еще раз надо обновлять страницу
}

function takeApple() {
  ctx.clearRect(180, 200, 50, 50);

  console.log("Отобрали яблоко");
  // buttonGiveApple.removeEventListener("click", giveApple); 
}

buttonGiveApple.addEventListener("click", giveApple);

buttonBadTikeApple.addEventListener("click", takeApple);

//removeEventListener нужен для отключения отслеживания события

//делаем движение персонажа

// function moveToTheRight() {

// }
