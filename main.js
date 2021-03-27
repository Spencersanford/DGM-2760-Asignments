function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }




  function getMonthName(month) {
    let name 
    switch (month) {
        case 1:
            name = "Janurary"
            break;

        case 2:
        name = "Feburary"
        break;

        case 3:
        name = "March"
        break;

        case 4:
        name = "April"
        break;

        case 5:
        name = "May"
        break;

        case 6:
        name = "June"
        break;

        case 7:
            name = "July"
            break;

        case 8:
        name = "August"
        break;

        case 9:
        name = "September"
        break;

        case 10:
        name = "October"
        break;

        case 11:
        name = "November"
        break;

        case 12:
        name = "Janurary"
        break;
    
        default:
            name = "not a month"
            break;
    }

    return name
  }

  function getFortune(fate) {

    let message 
    switch (fate) {
        case 1:
            message = "be hired to write the script to shrek 5"
            break;

        case 2:
        message = "win 100,000 dollars worth of cheeto puffs"
        break;

        case 3:
        message = "will be given a pet dragon"
        break;

        case 4:
        message = "fall in love with an older southern gentleman"
        break;

        case 5:
        message = "have a freaky friday scenario"
        break;

    
        default:
            message = "not a month"
            break;
    }

    return message
  }

let fate = getRandomIntInclusive(1,5)
let day = getRandomIntInclusive(1,30)
let month = getRandomIntInclusive (1,12)
 const monthName = getMonthName(month)
const fateText = getFortune(fate)

  const fortuneReval = `on ${monthName} ${day}, you will ${fateText}`

  document.querySelector('#fortune').innerText = fortuneReval