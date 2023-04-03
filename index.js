
let guessBtn = document.getElementById("guess-btn")
let playAgainBtn = document.getElementById("play-again-btn")
let output = document.getElementById("output-text")

let randomNumber = [Math.floor(Math.random() * 10 + 1)]

console.log(randomNumber)

guessBtn.addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value
    if (userInput == randomNumber) {
        output.innerHTML = `You guessed right, the number was ${randomNumber} 🥳`
        output.style.color = "yellow"
    } else if (userInput < randomNumber && userInput > 0) {
        output.innerHTML = "It's too low"
    }
    if (userInput > randomNumber && userInput < 10) {
        output.innerHTML = "It's too high"
    }
    if (userInput < 1) {
        output.innerHTML = "Higher, it has to be between 1 and 10"
    }
    if (userInput > 10) {
        output.innerHTML = "Lower, it has to be between 1 and 10"
    }
    if (isNaN(userInput)) {
        output.innerHTML = "That's not a number"
    }
})

playAgainBtn.addEventListener('click', function(){
    output.innerHTML = "Enter a number below:"
    output.style.color = "white"
    document.getElementById("user-input").value = ''
})



