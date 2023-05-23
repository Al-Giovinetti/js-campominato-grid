
let mainElement = document.querySelector("main")

// Chiudo tutto in un event listened 
const btnPlay = document.querySelector("button");

const clear=""

btnPlay.addEventListener("click",function(){
    let bigDivElement = getNewDivElement();
    bigDivElement.classList.add("appear");

    mainElement.append(bigDivElement);
})


// FUNCTION //

function getNewDivElement(){
    const NewElement = document.createElement("div");
    return NewElement
}