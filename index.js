// Genera la targeta bingo
const getBingoCard = () => {
  let card = [[], [], [], [], []];
  for (let i = 0; i < card.length; i++) {
    // Asignamos los intervalos de valores a cada columna
    let min = 1 + 15 * i;
    let max = min + 15;

    // Rellena los 5 elementos de cada subarreglo
    while (card[i].length < 5) {
      // Asigna un valor aleatoorio en su respectivo intervalo
      let value = Math.floor(Math.random() * (max - min)) + min;

      // Evita valores repetidos
      if (!card[i].includes(value)) {
        card[i].push(value);
      }
    }
  }
  // GRATIS
  card[2][2] = "FREE";
  return card;
};

// Marcador de la targeta BINGO
const checkCard = (card, number) => {
  for (let i = 0; i < 5; i++) {
    // Hace check si el número se encuentra en la tarjeta
    if (card[i].includes(number)) {
      let j = card[i].indexOf(number);
      card[i][j] = "check";
    }
  }
};

//Verifica si es ganador
const checkWinner = (card) => {
  let count = 0;

  // si es ganador count es igual a 24 entonces es ganador
  card.forEach((e) => {
    e.forEach((e2) => {
      if (e2 == "check") {
        count++;
      }
    });
  });

  if (count == 24) {
    console.log("BINGO");
    return true;
  } else {
    return false;
  }
};

// Comienza el juego
const Start = () => {
  let numbers = [];
  let card = getBingoCard();

  // Retorna 1 a 1 los valores  hasta que salga un ganador
  while (numbers.length <= 74) {
    // Genera números del 1 al 75
    let value = 1 + Math.floor(Math.random() * 74);

    // Evita valores repetidos
    if (!numbers.includes(value)) {
      numbers.push(value);
      // Verifica si la card posee ese valor
      checkCard(card, value);
    }

    // Verifica si es ganador
    if (checkWinner(card)) {
      break;
    }
  }
};
Start();
