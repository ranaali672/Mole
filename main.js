let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;


window.onload =function(){
    setGame();
}

function setGame(){
    for(let i=0; i<9;i++){
        let tile = document.createElement("div")
        // create 9 divs by js
        tile.id=i.toString();
        // id
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile)
    }
    setInterval(setMole,1500);
    setInterval(setPlant,2000);
}

function getRandomTile(){
    let nums =Math.floor(  Math.random()*9) ;  //0-9  integer
    return nums.toString();
}

function setMole(){
    if(gameOver)
    {
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }
    if (currPlantTile && currPlantTile.id == num) {
         return;
    }
    let mole = document.createElement("img");
    mole.src="./monty-mole.png"
    let num = getRandomTile()
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant(){
    if(gameOver){
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }
    if (currMoleTile && currMoleTile.id == num) {
      return;
    }
    let plant = document.createElement("img");
    plant.src="./piranha-plant.png";

    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameOver){
        return;
    }
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score html
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}