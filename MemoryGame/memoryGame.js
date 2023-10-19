document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "leaves",
      img: "/MemoryGame/IMG/leaves.png",
    },
    {
      name: "leaves",
      img: "/MemoryGame/IMG/leaves.png",
    },
    {
      name: "headphones",
      img: "/MemoryGame/IMG/headphones.png",
    },
    {
      name: "headphones",
      img: "/MemoryGame/IMG/headphones.png",
    },
    {
      name: "dices",
      img: "/MemoryGame/IMG/dices.png",
    },
    {
      name: "dices",
      img: "/MemoryGame/IMG/dices.png",
    },
    {
      name: "memory",
      img: "/MemoryGame/IMG/memory.png",
    },
    {
      name: "memory",
      img: "/MemoryGame/IMG/memory.png",
    },
    {
      name: "clock",
      img: "/MemoryGame/IMG/clock.png",
    },
    {
      name: "clock",
      img: "/MemoryGame/IMG/clock.png",
    },
    {
      name: "cherries",
      img: "/MemoryGame/IMG/cherries.png",
    },
    {
      name: "cherries",
      img: "/MemoryGame/IMG/cherries.png",
    }
  ];


const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

// crear tablero

function crearTablero() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "/MemoryGame/IMG/blank.png");
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
    cards[optionOneId].setAttribute("src", "/MemoryGame/IMG/white.png");
    cards[optionTwoId].setAttribute("src", "/MemoryGame/IMG/white.png");
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "/MemoryGame/IMG/blank");
    cards[optionTwoId].setAttribute("src", "/MemoryGame/IMG/blank");
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