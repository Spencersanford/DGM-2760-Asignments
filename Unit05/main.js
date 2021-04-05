const trees = ['oak', 'Pine', 'Aspen', 'Bald Cyprus']
const error = document.querySelector('#error')
const dispalyResults = document.querySelector("#displayResults")


// display List of Trees
const listTrees = () => {
    let treeList = ""
    trees.forEach(tree => {
        treeList += `${tree} <br>`

    })
    dispalyResults.innerHTML = `${treeList} <span>${trees.length} elements long </span>`
    
}

listTrees()



document.querySelector("#add_redwood").onclick = () =>{
    trees.push("redwood")
    listTrees()
}

document.querySelector("#add_pear").onclick = () =>{
    trees.unshift("pear")
    listTrees()
}

// Removing tree
document.querySelector("#remove_1").onclick = () =>{
    trees.shift()
    listTrees()
}

document.querySelector("#remove_2").onclick = () =>{
    trees.splice(1,1)
    listTrees()
}

document.querySelector("#remove_last").onclick = () =>{
    trees.pop()
    listTrees()
}

//Sort 

document.querySelector("#sortTrees").onclick = () =>{
    trees.sort()
    listTrees()
}

document.querySelector("#lowerTrees").onclick = () =>{
    //var lowercase = trees.map(trees => trees.toLowerCase());
    let treeList = ""
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    const lowercase = treeList.toLowerCase()

    dispalyResults.innerHTML = `${lowercase} <span>${trees.length} elements long </span>`
    
    
}

let treeList = ""
    trees.forEach(tree => {
        treeList += `${tree} <br> `

    })
console.log(treeList)



//const lowerlistTrees = () => {
    //let lowercaseList = ""
    //lowercase.forEach(lower => {
      //  lowercaseList += `${lower} <br>`

   // })
   // dispalyResults.innerHTML = `${lowercaseList} <span>${lowercase.length} elements long </span>`
//}/
//lowerlistTrees()
/*



 const lowercase = trees.toString().toLowerCase().split(',')
    
    const Listlowercase = () => {
        let lowercaseArray = ""
        lowercase.forEach(lower => {
            lowercaseArray += `${lower} <br>`
        })
        dispalyResults.innerHTML = `${lowercaseArray} <span>${lowercase.length} elements long </span>`
    console.log(lowercaseArray)
    }
    
    Listlowercase()
    
}




*/