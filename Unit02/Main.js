document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "This IZ Clouseau"
var docTitle = document.title;
var date = document.lastModified;

function reDisplay() {
let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall`
let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} from the right edge`
let myWindow = document.querySelector('#myWindow').innerText = windowSizes + '\n' + offset
}
reDisplay()


let myWindow = document.querySelector('#myDocument').innerText = `Document name is ${docTitle} and the page was last modified on ${date}`
