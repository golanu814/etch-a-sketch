const dimensions = 690;
const defaultColor = "#6495ED";
const whiteHex = "#FFFFFF";

let color = "#6495ED";
let prevColor = "#6495ED";
let toggle = false;

// Title creation

const title = document.querySelector("#header");

const info = document.createElement("h");
info.textContent = "Welcome to Etch-A-Sketch!";
info.style.fontSize = '30px';
title.style.display = 'flex';
title.style.justifyContent = 'center';
title.style.alignItems = 'center';
title.appendChild(info);


// Button creation
const buttonDiv = document.querySelector("#buttonDiv")

const mainButton = document.querySelector("#button");
mainButton.textContent = "Change grid dimensions";
buttonDiv.style.display = 'flex';
buttonDiv.style.justifyContent = 'center';
buttonDiv.style.alignItems = 'center';
buttonDiv.style.margin = '25px';
buttonDiv.style.gap = '25px';

const clearButton = document.querySelector("#clear");
clearButton.textContent = "Clear";
 
let toggleButton = document.querySelector("#tog");
toggleButton.textContent = "Toggle multi-color mode";

// Grid container creation

const grid = document.querySelector("#container");
let squareList = document.querySelectorAll("#square");



//Color picker stuff

initialGrid();


window.addEventListener("load", startup, false);


function startup() {
  colorPicker = document.querySelector("#color-picker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("change", updateColor, false);
  colorPicker.select();
}



function updateColor(event) {

    squareList = document.querySelectorAll("#square");

    color = event.target.value;

    
    //valid if single-color mode is active
    if (!toggle){

        for (let i = 0; i < squareList.length; i++){
    
            if ( window.getComputedStyle(squareList[i]).backgroundColor !== 'rgb(255, 255, 255)'){
                console.log("reached here!");
                squareList[i].style.backgroundColor = color;
            
            }
            console.log(squareList[i].style.backgroundColor);
        }
       
    
        prevColor = color;

    }
 
}



//Creating the Grid
  

function initialGrid(){

    for (let i = 0; i < 16; i++){

        const row = document.createElement("div");
        row.style.margin = 'auto';
        row.style.display = 'flex';
        row.style.justifyContent = 'center';
        row.style.alignItems = 'center';
    
        for (let i = 0; i < 16; i++){
    
            const item = document.createElement("div");
            item.id = "square";
    
            item.style.border = '1px solid black';
            item.style.width = dimensions/16 + 'px';
            item.style.height = dimensions/16 + 'px';
            item.style.backgroundColor = "#FFFFFF";
            row.appendChild(item);
            grid.appendChild(row);
    
        }
    
    }
    
    squareList = document.querySelectorAll("#square");
    
    
    for (let i = 0; i < squareList.length; i++){
    
        squareList[i].addEventListener("mouseover",(event) => {
            event.target.style.backgroundColor = color;
        });
    
    }


}

toggleButton.addEventListener("click", function(e){

    //Enable multi-color
    if (!toggle){ 

        toggle = true; 
        toggleButton.textContent = "Toggle single-color mode";
        return;

    }

    //Enable single-color
    if (toggle){ 

        toggle = false;
        toggleButton.textContent = "Toggle multi-color mode";
    
    }

});

mainButton.addEventListener("click", function(e){
    promptFunction();
});

function promptFunction(){

    let columns = 0;

    columns = prompt("Enter your column/row number! (must be from 1-100)");

    while (isNaN(columns) || columns === '\n' || columns === null || columns < 1 || columns > 100){

        if (columns === null){ 
            return;
        }

        alert("Please enter a valid number (1-100).");
        columns = prompt("Please enter the number of columns you'd like!");
    }
    // alert("Your number is " + columns);

    columns = columns;

    if (grid.hasChildNodes()){
        grid.replaceChildren();
    }

    createGrid(columns);

    
}

clearButton.addEventListener("click", function(e){

    for (let i = 0; i < squareList.length; i++){
        squareList[i].style.backgroundColor = "white";
    
    }
    
});


function createGrid(columns){

    for (let i = 0; i < columns; i++){

        const row = document.createElement("div");
        row.style.margin = 'auto';
        row.style.display = 'flex';
        row.style.justifyContent = 'center';
        row.style.alignItems = 'center';

        for (let i = 0; i < columns; i++){

            const item = document.createElement("div");
            item.id = "square";
    
            item.style.border = '1px solid black';
            item.style.width = dimensions/columns + 'px';
            item.style.height = dimensions/columns + 'px';
            item.style.backgroundColor = "#FFFFFF";
            row.appendChild(item);
            grid.appendChild(row);

        }


    }

    squareList = document.querySelectorAll("#square");


    for (let i = 0; i < squareList.length; i++){

        squareList[i].addEventListener("mouseover",(event) => {
            event.target.style.backgroundColor = color;
        });
    
    }


}