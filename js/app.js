// make start div with start button 

// add event listener to button
// when clicked call function to populate screen with cards face dowm

// add click event listeners to each card 

// when  clicked if the card is the queen Game is over player wins, then play win animation, ask player to play again
// else take 1 life, check if game is over

let bodyDiv = document.querySelector('div')
for(let i = 0; i < 28; i++){
    let cardDiv = document.createElement('div')    
    cardDiv.innerHTML = '<img src="assets/queenOfHearts.png"/>'
    cardDiv.style.width = '100px'
    cardDiv.style.height = '200px'
    cardDiv.addEventListener('click', () => {
        console.log("Found the queen")
    })
    bodyDiv.appendChild(cardDiv)
}