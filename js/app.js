// all card divs get appended to the main div
let mainDiv = document.querySelector('div')
let livesH1 = document.getElementById('lives')
let lives = 4
const makeCards = () => {
    
    // makes x amount of cards
    for(let i = 0; i < 9; i++){
        
        // selects random card image
        let randNum = Math.floor(Math.random() * 9) + 2
        let inHTML = `<img id="${randNum}"src="assets/cardBackSide.png"/>` 
        let cardDiv = document.createElement('div')    
        cardDiv.innerHTML = inHTML
        cardDiv.style.width = '100px'
        cardDiv.style.height = '200px'

        // add event listener to check if queen was found 
        cardDiv.addEventListener('click', (e) => {          
            let id = e.target.id
            // need to fix src check for hosting on different servers
            if (id == 'queen'){
                console.log('You Found The QUEEN!!!')
                e.target.src = `http://127.0.0.1:5500/assets/queenOfHearts.png`
            }else{
                lives = lives - 1
                livesH1.innerText = `Lives: ${lives}`
                console.log(id)
                e.target.src = `http://127.0.0.1:5500/assets/${id}-OfHearts.png`
            }
        })

        // 'ID' is prob only needed for the queen
        cardDiv.setAttribute('id', randNum)
        mainDiv.appendChild(cardDiv)
    }

    // randomly appends queen card 
    let rand = Math.floor(Math.random() * mainDiv.children.length)
    mainDiv.children[rand].innerHTML = `<img id="queen"src="assets/cardBackSide.png"/>`
    mainDiv.children[rand].setAttribute('id', 'queen')
    console.log(mainDiv.children[rand])
}

makeCards()



// https://upload.wikimedia.org/wikipedia/commons/5/55/Atlasnye_playing_cards_deck.svg
// computers are like air conditioning, as soon as you open up windows it becomes useless 