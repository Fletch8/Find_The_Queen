// all card divs get appended to the main div
let mainDiv = document.querySelector('div')
const makeCards = () => {
    
    // makes x amount of cards
    for(let i = 0; i < 28; i++){
        
        // select random card image
        let randNum = Math.floor(Math.random() * 9) + 2
        let inHTML = `<img src="assets/${randNum}-OfHearts.png"/>` 
        let cardDiv = document.createElement('div')    
        cardDiv.innerHTML = inHTML
        cardDiv.style.width = '100px'
        cardDiv.style.height = '200px'

        // add event listener to check if queen was found // need to fix src check for hosting on different servers
        cardDiv.addEventListener('click', (e) => {          

            if (String(e.target.src) == 'http://127.0.0.1:5500/assets/queenOfHearts.png'){
                console.log('You Found The QUEEN!!!')
            }else{
                console.log(e.target.src)
            }
        })
        cardDiv.setAttribute('id', randNum)
        mainDiv.appendChild(cardDiv)
    }

    // randomly appends queen card 
    let rand = Math.floor(Math.random() * mainDiv.children.length)
    mainDiv.children[rand].innerHTML = `<img src="assets/queenOfHearts.png"/>`
    mainDiv.children[rand].setAttribute('id', 'queen')
    console.log(mainDiv.children[rand])
}
makeCards()
