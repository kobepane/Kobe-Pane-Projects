let counter = 5;
let display = document.querySelector("#countDownSpan");
let flipCardOne = document.querySelector("#cardOne");
let flipCardTwo = document.querySelector("#cardTwo");
let flipCardThree = document.querySelector("#cardThree");
let flipCardFour = document.querySelector("#cardFour");
let flipCardFive = document.querySelector("#cardFive");
let cards = "2 3 4 5 6 7 8 9 10 J Q K A".split(" ");
let suits = "C S H D".split(" ");
let chosen = [];

/* function displayCounter() {
  counter--;
  display.innerHTML = `${counter}`
  if(counter === 0){
    clearInterval(intervalID);
    showCard();
  }
} 

intervalID = setInterval(displayCounter, 1000); */


function showCard() {
  let randomCardIndexOne = Math.floor(Math.random() * cards.length);
  let randomSuitIndexOne = Math.floor(Math.random() * suits.length);
  let randomCardChoiceOne = cards[randomCardIndexOne];
  let randomSuitChoiceOne = suits[randomSuitIndexOne];
 
  flipCardOne.setAttribute("src", "cards/" + `${randomCardChoiceOne + randomSuitChoiceOne}` + ".png")

  let randomCardIndexTwo = Math.floor(Math.random() * cards.length);
  let randomSuitIndexTwo = Math.floor(Math.random() * suits.length);
  let randomCardChoiceTwo = cards[randomCardIndexTwo];
  let randomSuitChoiceTwo = suits[randomSuitIndexTwo];
  flipCardTwo.setAttribute("src", "cards/" + `${randomCardChoiceTwo + randomSuitChoiceTwo}` + ".png")

  let randomCardIndexThree = Math.floor(Math.random() * cards.length);
  let randomSuitIndexThree = Math.floor(Math.random() * suits.length);
  let randomCardChoiceThree = cards[randomCardIndexThree];
  let randomSuitChoiceThree = suits[randomSuitIndexThree];
  flipCardThree.setAttribute("src", "cards/" + `${randomCardChoiceThree + randomSuitChoiceThree}` + ".png")

  let randomCardIndexFour = Math.floor(Math.random() * cards.length);
  let randomSuitIndexFour = Math.floor(Math.random() * suits.length);
  let randomCardChoiceFour = cards[randomCardIndexFour];
  let randomSuitChoiceFour = suits[randomSuitIndexFour];
  flipCardFour.setAttribute("src", "cards/" + `${randomCardChoiceFour + randomSuitChoiceFour}` + ".png")

  let randomCardIndexFive = Math.floor(Math.random() * cards.length);
  let randomSuitIndexFive = Math.floor(Math.random() * suits.length);
  let randomCardChoiceFive = cards[randomCardIndexFive];
  let randomSuitChoiceFive = suits[randomSuitIndexFive];
  flipCardFive.setAttribute("src", "cards/" + `${randomCardChoiceFive + randomSuitChoiceFive}` + ".png")
}

