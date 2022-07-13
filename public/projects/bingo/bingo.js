function bingo() {
  let user;
  function userName() {
    do {
      user = prompt("Bienvenido al bingo! Puedes decirnos tu nombre?");
    } while (user.length < 1);
  }

  userName();
  function rules() {
    console.log(
      "Te generaremos un cartel aleatorio y tu podrás decidir si quieres otro o no."
    );
    console.log(
      "Para completar una línea deben ser 5 en horizontal y para ganar hay que completar el cartel."
    );
    console.log(
      "El juego funciona mediante un sistema de puntos el cual funciona de la siguiente forma:"
    );
    console.log(
      "Al principio se asignan 75 puntos a cada jugador, y el sistema de punctuation es: turno = -1ptos, número = 1ptos, línea = 10ptos, bingo = 25ptos. Gana el que al final del juego tenga más puntos."
    );
    if (confirm(`Listo para empezar, ${user}?`) === false) {
      console.log("Bueno pues haberte preparado mejor, vamos a empezar.");
    } else {
      console.log("Empecemos!");
    }
  }
  rules();

  let bingoCard1 = [];
  let bingoCard2 = [];
  let bingoCard3 = [];
  let bingoCard = [];
  let confirmCard;
  function genBingoCard() {
    do {
      bingoCard = [];
      bingoCard1 = [];
      bingoCard2 = [];
      bingoCard3 = [];

      do {
        const randomCardNum = Math.floor(Math.random() * 100 + 1);
        if (!bingoCard1.includes(randomCardNum)) {
          bingoCard1.push(randomCardNum);
        }
      } while (bingoCard1.length < 5);
      do {
        const randomCardNum = Math.floor(Math.random() * 100 + 1);
        if (
          !bingoCard1.includes(randomCardNum) &&
          !bingoCard2.includes(randomCardNum)
        ) {
          bingoCard2.push(randomCardNum);
        }
      } while (bingoCard2.length < 5);
      do {
        const randomCardNum = Math.floor(Math.random() * 100 + 1);
        if (
          !bingoCard1.includes(randomCardNum) &&
          !bingoCard2.includes(randomCardNum) &&
          !bingoCard3.includes(randomCardNum)
        ) {
          bingoCard3.push(randomCardNum);
        }
      } while (bingoCard3.length < 5);

      bingoCard.push(bingoCard1, bingoCard2, bingoCard3);

      console.table(bingoCard);
      confirmCard = confirm("Quieres cambiar de carton?");
    } while (confirmCard);
  }
  genBingoCard();

  const numbers = [];
  let randomNum;
  function genRandomNum() {
    do {
      randomNum = Math.floor(Math.random() * 100 + 1);
    } while (numbers.includes(randomNum));

    numbers.push(randomNum);
    console.log(randomNum);
  }

  const ranks = [
    { name: "Jugador 2", punctuation: 46 },
    { name: "Jugador 3", punctuation: 22 },
    { name: "Jugador 4", punctuation: 11 },
    { name: "Jugador 5", punctuation: 0 },
  ];
  let points;
  function ranking() {
    ranks.push({
      name: user,
      punctuation: points,
    });
    ranks.sort((a, b) => b.punctuation - a.punctuation);

    console.log("Estas son las posiciones finales del bingo:");
    console.table(ranks);
  }

  points = 75;
  let askTurn;
  let firstLineCount = 0;
  let secondLineCount = 0;
  let thirdLineCount = 0;
  let allLinesCount = 0;
  let bingoIsCompleted = false;
  function newTurn() {
    do {
      genRandomNum();
      points--;
      for (let i = 0; i < bingoCard.length; i++) {
        for (let j = 0; j < bingoCard[i].length; j++) {
          if (bingoCard[i][j] === randomNum) {
            bingoCard[i][j] = "X";
            switch (i) {
              case 0:
                firstLineCount++;
                break;
              case 1:
                secondLineCount++;
                break;
              default:
                thirdLineCount++;
            }
            points++;

            if (firstLineCount === 5) {
              points += 10;
              console.log("Línea!");
              firstLineCount = 6;
              allLinesCount++;
            }
            if (secondLineCount === 5) {
              points += 10;
              console.log("Línea!");
              secondLineCount = 6;
              allLinesCount++;
            }
            if (thirdLineCount === 5) {
              points += 10;
              console.log("Línea!");
              thirdLineCount = 6;
              allLinesCount++;
            }
            if (allLinesCount === 3) {
              bingoIsCompleted = true;
              points += 25;
              console.log("Y Bingo!");
            }
            console.log(`Tienes ${points}ptos. y este es tu carton:`);
            console.table(bingoCard);
          }
        }
      }
      askTurn = confirm("Quieres un numero nuevo?");
    } while (askTurn && points >= 0 && bingoIsCompleted === false);

    if (points < 0) {
      points = 0;
    }
    ranking();
  }
  newTurn();
}
bingo();
