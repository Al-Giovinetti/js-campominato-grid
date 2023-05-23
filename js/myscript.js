
let mainElement = document.querySelector("main")

let difficultChoice = document.getElementById("difficult")

// Chiudo tutto in un event listened 
const btnPlay = document.querySelector("button");

btnPlay.addEventListener("click",function(){
    let bigGrid = getNewDivElement();
    bigGrid.classList.add("big-grid");

    mainElement.innerHTML=""
    mainElement.append(bigGrid);

    if (difficultChoice.value == 1){
        for(let i=0; i<100 ; i++){
            const cell = getNewDivElement()
            cell.classList.add("cell")
            const numberCell = getNewDivElement()
            numberCell.innerHTML=i+1
    
            cell.addEventListener("click",function(){
                cell.classList.toggle("cell-select")
                console.log("Hai selezionato la cella " + numberCell.innerHTML)
            })
            bigGrid.appendChild(cell)
            cell.appendChild(numberCell)
        }
    }else if(difficultChoice.value == 2){
        for(let i=0; i< 81; i++){
            const cell = getNewDivElement()
            cell.classList.add("cell-2")
            const numberCell = getNewDivElement()
            numberCell.innerHTML=i+1
    
            cell.addEventListener("click",function(){
                cell.classList.toggle("cell-select-2")
                console.log("Hai selezionato la cella " + numberCell.innerHTML)
            })
            bigGrid.appendChild(cell)
            cell.appendChild(numberCell)
        }
    }else{
        for(let i=0; i< 49; i++){
            const cell = getNewDivElement()
            cell.classList.add("cell-3")
            const numberCell = getNewDivElement()
            numberCell.innerHTML=i+1
    
            cell.addEventListener("click",function(){
                cell.classList.toggle("cell-select-3")
                console.log("Hai selezionato la cella " + numberCell.innerHTML)
            })
            bigGrid.appendChild(cell)
            cell.appendChild(numberCell)    
        }
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