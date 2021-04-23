function duplicateMenu () {
let topList = document.querySelectorAll('ul#primaryNavigation li a')

let newlist = document.createElement('ul')

topList.forEach(menuItem => {
    let newItem = document.createElement('li')
    let newLink = document.createElement('a')
    newLink.setAttribute('href', menuItem.getAttribute('href'))
    newLink.innerText = menuItem.innerHTML
    
    let bottomList = document.querySelector('#smallNavArea')
   
    
    bottomList.appendChild(newlist)
    newlist.appendChild(newItem)
    newItem.appendChild(newLink)  
})
}

duplicateMenu()