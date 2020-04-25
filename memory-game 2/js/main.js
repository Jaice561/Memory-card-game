console.log("Up and running!");

const cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png"
},
    {
rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png"
},
{
rank: 'king',
suit: 'heart',
cardImage: "images/king-of-hearts.png"
}
];


//let cards=["queen", "queen", "king","king"];

let cardsInPlay=[];
let wins=0;
let losses=0;
let clickedCards=[];


function createBoard() {
    let uniqueNumbers=[];
    while (uniqueNumbers.length<4) {
            let randomNumber= Math.floor(Math.random() * 4);
            if (uniqueNumbers.indexOf(randomNumber) === -1) {
                uniqueNumbers.push(randomNumber);
            }
        }
    for (let i = 0; i < cards.length; i++) {
    // Logic here
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', uniqueNumbers[i]);
        cardElement.addEventListener('click',flipCard);
        document.getElementById('game-board').appendChild(cardElement);
}
}

function reset() {
    let gameboard=document.getElementById('game-board');
    for (let i = 0; i < cards.length; i++) {
        gameboard.removeChild(gameboard.lastChild);
    }
    document.getElementById("result-msg").style.color="black";
    document.getElementById("result-msg").innerHTML="Welcome";
    cardsInPlay=[];
    clickedCards=[];
    createBoard();
}

function checkForMatch() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            document.getElementById("result-msg").style.color="green"
            document.getElementById("result-msg").innerHTML = "You Won";
            wins = wins + 1;
            document.getElementById("wins").style.color="green"
            document.getElementById("wins").innerHTML = wins;

        } else {
            document.getElementById("result-msg").style.color="red"
            document.getElementById("result-msg").innerHTML = "You Lost";
            losses = losses + 1;
            document.getElementById("losses").style.color="red"
            document.getElementById("losses").innerHTML = losses;
        }
    }
}

function flipCard() {
    let cardId=this.getAttribute('data-id');
    if(clickedCards.indexOf(cardId) === -1) {
        clickedCards.push(cardId);
        cardsInPlay.push(cards[cardId].rank);
        this.setAttribute('src', cards[cardId].cardImage);
        checkForMatch();
    }
}

createBoard();

