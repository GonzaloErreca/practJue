document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "leaves",
      img: "/MemoryGame/Img/leaves.png",
    },
    {
      name: "leaves",
      img: "/MemoryGame/Img/leaves.png",
    },
    {
      name: "headphones",
      img: "/MemoryGame/Img/headphones.png",
    },
    {
      name: "headphones",
      img: "/MemoryGame/Img/headphones.png",
    },
    {
      name: "dices",
      img: "/MemoryGame/Img/dices.png",
    },
    {
      name: "dices",
      img: "/MemoryGame/Img/dices.png",
    },
    {
      name: "memory",
      img: "/MemoryGame/Img/memory.png",
    },
    {
      name: "memory",
      img: "/MemoryGame/Img/memory.png",
    },
    {
      name: "clock",
      img: "/MemoryGame/Img/clock.png",
    },
    {
      name: "clock",
      img: "/MemoryGame/Img/clock.png",
    },
    {
      name: "cherries",
      img: "/MemoryGame/Img/cherries.png",
    },
    {
      name: "cherries",
      img: "/MemoryGame/Img/cherries.png",
    }
  ];


const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

// crear tablero
cardArray.sort(() => 0.5 - Math.random());

//console.log(cardArray); //probamos que las cartas esten randomized

function crearTablero() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "/MemoryGame/Img/blank.png");
    card.setAttribute("data-id", i);
   // card.addEventListener("click",flipcard)
    grid.appendChild(card);
  }
}

crearTablero();

//check match
function checkForMatch() {
  let cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    alert("Encontraste un par!");
    cards[optionOneId].setAttribute("src", "/MemoryGame/Img/white.png");
    cards[optionTwoId].setAttribute("src", "/MemoryGame/Img/white.png");
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "/MemoryGame/Img/blank");
    cards[optionTwoId].setAttribute("src", "/MemoryGame/Img/blank");
    alert("Intentalo otra vez!");
  }

  cardsChosen = [];
  cardsChosenId = [];
}

//dar vuelta la carta

function flipCard(card) {
  let cardID = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardID].name);
  cardsChosenId.push(cardID);
  this.setAttribute("src", cardArray[cardID].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

});