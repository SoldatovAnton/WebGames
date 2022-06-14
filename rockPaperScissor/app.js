const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Начало игры
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Матч
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //Варианты компьютера
    const computerOptions = ["камень", "бумага", "ножницы"];

    options.forEach(option => {
      option.addEventListener("click", function () {
        //Выбор компьютера
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Сравнение рук
          compareHands(this.textContent, computerChoice);
          //Обновление изображений
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //Анимация
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Обновление текста
    const winner = document.querySelector(".winner");
    //Проверка на ничью
    if (playerChoice === computerChoice) {
      winner.textContent = "Ничья.";
      return;
    }
    //Камень
    if (playerChoice === "камень") {
      if (computerChoice === "ножницы") {
        winner.textContent = "Игрок победил!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Победил компьютер.";
        cScore++;
        updateScore();
        return;
      }
    }
    //Бумага
    if (playerChoice === "бумага") {
      if (computerChoice === "ножницы") {
        winner.textContent = "Победил компьютер.";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Игрок победил!";
        pScore++;
        updateScore();
        return;
      }
    }
    //Ножницы
    if (playerChoice === "ножницы") {
      if (computerChoice === "камень") {
        winner.textContent = "Победил компьютер.";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Игрок победил!";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Вызов функций
  startGame();
  playMatch();
};

game();
