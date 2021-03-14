document.getElementById('company').innerHTML = "Joe's Bed and Breakfest";
document.querySelector('#slogan').innerText = 'The best place to stay in Utah!'

let userName = prompt('what is your name?')

let message = `Hello ${userName}, welcome to the finest lodging in Utah`

document.querySelector('#greeting').innerText= message