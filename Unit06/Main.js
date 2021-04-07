function tellStory() {
    const nouns = document.querySelector("#noun").value
    const verbs = document.querySelector("#verbs").value
    const adj = document.querySelector("#adjective").value
   
    const nounArray = nouns.toLowerCase().split(/\s+/)
    const verbArray = verbs.toLowerCase().split(/\s+/)
    const adjArray = adj.toLowerCase().split(/\s+/)

    const story = `Once upon a time there was four ${nounArray[0]}s named Richerd, Shrek, John, and Sherry. They all lived together in a ${adjArray[0]} ${nounArray[1]}. Evrey morning they would wake up and eat ${adjArray[1]} ${nounArray[2]} and then go down to the ${nounArray[3]} stadium and practice their ${verbArray[0]}ing, ${verbArray[1]}ing , and ${verbArray[2]}ing. Later they would go home and watch a movie about ${adjArray[2]} ${nounArray[4]} they didn't find this intresting so then they decided to go to the ${nounArray[5]} shop. There they bought three ${nounArray[6]}s. This is a typical day with the gang `
    const storyText = document.querySelector("#story")
    storyText.innerHTML = story

}

