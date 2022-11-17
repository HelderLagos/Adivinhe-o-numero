let computerNumber
let userNumbers = []
let chances = 0
let maxGuesses = 10

function init() {
    computerNumber = Math.floor( Math.random() * 50 + 1)
}


function newGame () {
    window.location.reload('newGameButton')
}


function conpareNumbers () {
    const userNumber =  Number(document.getElementById('inputBox').value) //armazeno o numero da caixa
    userNumbers.push(' ' + userNumber) // ele joga para array
    document.getElementById('guesses').innerHTML = userNumbers //e depois mostra na tela
    
    if(chances < maxGuesses) {
          
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Xíi! Ta Frio! &#x1F976'
            document.getElementById('inputBox')
    .value = ''    
        chances++
            document.getElementById('attempts').innerHTML = chances
    
        } else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Quase! Ta Quente! &#x1F929'
            document.getElementById('inputBox').value=''
            chances++
            document.getElementById('attempts').innerHTML = chances
    
        } else {
            document.getElementById('textOutput').innerHTML = 'ACERTOU!'
            chances++
            document.getElementById('attempts').innerHTML = chances
        }
    
    } else {        
        document.getElementById('textOutput').innerHTML = `PERDEU!<p>O numero era ${computerNumber}<p> TENTE NOVAMENTE!`
        document.getElementById('inputBox').setAttribute('Readonly' , 'Readonly')
    }
    
}




