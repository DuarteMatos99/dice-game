/* functions */

// randomize a number between 1 to 6
function randomNumber(){
    return Math.floor(Math.random() * 6) + 1
}

// changes title text
function changeTitle(title){
    return document.querySelector('.title').innerHTML = title
}

// defines src property between the random number generator for each dice individually 
function changeImage(dice, randomNumber){
    return document.querySelector(dice).setAttribute('src', `images/dice${randomNumber}.png`)
}


let player1 = randomNumber()
let player2 = randomNumber()


changeImage('.dice1', player1)
changeImage('.dice2', player2)


if (player1 > player2) {
    changeTitle('<span>Player 1</span> won!')
}
else if (player2 > player1) {
    changeTitle('<span>Player 2</span> won!')
}
else {
    changeTitle('Draw')
}
