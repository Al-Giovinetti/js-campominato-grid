
let mainElement = document.querySelector("main")

// Chiudo tutto in un event listened 
const btnPlay = document.querySelector("button");

btnPlay.addEventListener("click",function(){
    let bigGrid = getNewDivElement();
    bigGrid.classList.add("big-grid");

    mainElement.innerHTML=""
    mainElement.append(bigGrid);

    for(let i=0; i<100 ; i++){
        const cell = getNewDivElement()
        cell.classList.add("cell")
        const numberCell = getNewDivElement()
        numberCell.innerHTML=i+1

        cell.addEventListener("click",function(){
            cell.classList.toggle("cell-select")
            numberCell.classList.toggle("border-white")
            console.log(numberCell)
        })
        bigGrid.appendChild(cell)
        cell.appendChild(numberCell)
    }
})


// FUNCTION //
/**Give a div in memory, after must be append
 * 
 * @returns New div element
 */
function getNewDivElement(){
    const NewElement = document.createElement("div");
    return NewElement
}