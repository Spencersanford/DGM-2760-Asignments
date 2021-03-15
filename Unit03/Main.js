// Pick a random number 0 and 16



let correctNumber = Math.floor(Math.random() * 15)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(correctNumber)

function evalGuess(){
 totalGuesses += 1 
 gamerGuess = document.querySelector('#guess').value
 const feedback = document.querySelector("#feedback")

 if (gamerGuess == correctNumber){
     feedback.innerText = "you win!!!"
     giveAward()
 }
 else if( gamerGuess > correctNumber && gamerGuess < 16){
     
     feedback.innerText = 'to high'
 }
else if ( gamerGuess < correctNumber && gamerGuess > 0){
feedback.innerText = "to low"
}
else {
    feedback.innerText = "The number is between 1 and 15"
    totalGuesses -= 1
}

document.querySelector('#attempts').innerText=totalGuesses
}

function giveAward() {
    let imagePath ="#"
    switch(totalGuesses) {
        case 1:
        case 2:
        case 3:
        imagePath = "Images/blue.png"    
    
        break
        case 4:
        case 5:
        case 6:
            imagePath = "Images/red.png"     
     
            break
        case 7:
        case 8:
        case 9:

            imagePath = "Images/yellow.png" 
          
    }
    const awardImage = document.createElement("img")
    awardImage.setAttribute("src", imagePath)
    awardImage.setAttribute("class", "awardImage")
    const ribbon = document.querySelector("#banner")
    console.log(ribbon.hasChildNodes)
  

    if  (ribbon.hasChildNodes()){
        console.log("has award already") 
    }
    else{
    ribbon.appendChild(awardImage)
    console.log("append")
    }
    
}





