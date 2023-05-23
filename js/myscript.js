
let mainElement = document.querySelector("main")

// Chiudo tutto in un event listened 
const btnPlay = document.querySelector("button");

const clear=""

btnPlay.addEventListener("click",function(){
    let bigGrid = getNewDivElement();
    bigGrid.classList.add("big-grid");

    mainElement.append(bigGrid);

    for(let i=0; i<100 ; i++){
        const cell = getNewDivElement()
        cell.classList.add("cell")
        const numberCell = getNewDivElement()
        numberCell.innerHTML=i
        bigGrid.appendChild(cell)
        cell.appendChild(numberCell)
    }


})


// FUNCTION //

function getNewDivElement(){
    const NewElement = document.createElement("div");
    return NewElement
}