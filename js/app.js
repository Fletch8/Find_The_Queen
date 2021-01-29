// all card divs get appended to the main div
let startButton = document.querySelectorAll('button')[0]
let resetButton = document.querySelectorAll('button')[1]
let mainDiv = document.querySelector('div')
let livesH1 = document.getElementById('lives')
let lives = 4
let numOfCards = 9

// used for setting up next round, removes all elements then remakes them
const removeCard = () =>{
    mainDiv.innerHTML = ''
    makeCards(numOfCards)
}

// used when game is over
const reset = () => {
    location.reload()
}


const makeCards = (numOfCards) => {    
    // makes x amount of cards
    for(let i = 0; i < numOfCards; i++){
        
        // selects random card image
        let randNum = Math.floor(Math.random() * 9) + 2
        let inHTML = `<div id='${randNum} 'class="flip-card">
                            <div id='flip-card-inner-${randNum}'class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="assets/cardBackSide.png" style="width:100px;height:200px;">
                                </div>
                                <div class="flip-card-back">
                                    <img src="assets/${randNum}-OfHearts.png" style="width:100px;height:200px;">
                                </div>
                            </div>
                        </div>` 
        let cardDiv = document.createElement('div')    
        cardDiv.innerHTML = inHTML  
           

        // add event listener to check if queen was found // fix src for diffent host machines
        cardDiv.addEventListener('click', (e) => {          
            let id = cardDiv.childNodes[0].attributes[0].value   
            cardDiv.childNodes[0].childNodes[1].style.transform = 'rotateY(180deg)'

            // cardDiv.childNodes[0].childNodes[1].childNodes[3].childNodes[1].attributes[0] = 'src="assets/2-OfHearts.png"'
            // console.log(cardDiv.childNodes[0].childNodes[1].childNodes[3].childNodes[1].attributes[0] = 'src="assets/2-OfHearts.png"')

            // checks element ID for queen, if not found l 
            if (id == 'queen'){
                console.log('You Found The QUEEN!!!')
                // e.target.src = `http://127.0.0.1:5500/assets/queenOfHearts.png`
                // sets src for img
                cardDiv.childNodes[0].childNodes[1].childNodes[3].childNodes[1].attributes[0] = 'src="assets/queenOfHearts.png"'
                // just restarts game right now, eventually will start next round after setTimeout()
                if(confirm('You found the Queen!! play again')){
                    reset()
                }else{
                    reset()
                }
            }else{
                lives = lives - 1
                livesH1.innerText = `Lives: ${lives}`               
                // e.target.src = `http://127.0.0.1:5500/assets/${id}-OfHearts.png`
                // sets src for img
                cardDiv.childNodes[0].childNodes[1].childNodes[3].childNodes[1].attributes[0] = `src="assets/${id}-OfHearts.png"`
                if(lives == 0){
                    if(confirm('Oh no! you are out of lives play again')){
                        reset()
                    }else{
                        reset()
                    }
                }
            }
        })

        // set cardDiv ID's for tracking cards
        cardDiv.setAttribute('id', randNum)
        mainDiv.appendChild(cardDiv)
    }

    // randomly appends queen card 
    let rand = Math.floor(Math.random() * mainDiv.children.length)
    mainDiv.children[rand].innerHTML = `<div id='queen'class="flip-card">
                                            <div id='flip-card-inner-queen'class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <img src="assets/cardBackSide.png" style="width:100px;height:200px;">
                                                </div>
                                                <div class="flip-card-back">
                                                    <img src="assets/queenOfHearts.png" style="width:100px;height:200px;">
                                                </div>
                                            </div>
                                        </div>`    
   
}

startButton.addEventListener('click', ()=>{
    if(mainDiv.children.length == 0){
        makeCards(numOfCards)    
    }    
})
resetButton.addEventListener('click', ()=>{
    reset()
})



// card front side images from  https://upload.wikimedia.org/wikipedia/commons/5/55/Atlasnye_playing_cards_deck.svg
// card backside from https://www.pinterest.com/pin/105130972527979556/
// html && css flip animation https://www.w3schools.com/howto/howto_css_flip_card.asp
// computers are like air conditioning, as soon as you open up windows it becomes useless 