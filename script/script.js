/*
General plan

-Game start
turn based 
-Player 1 on chosen space
  -click
-Player2 clicks on chosen space
  //how do I determine the turn per player
        //initial function consist of player1
        //on click player 2
        //switches every click
-Continue till winner is found
---How do I maintain state

*/
// ***Dom Elements
//Get grid elements
var grid = document.querySelector(".container");
var spaces = document.querySelectorAll(".space");

// **Functions
//Click event for 
const clickTest = (e) =>{
    console.log(`${e.target.innerText} was clicked`)
};

// ***Event Listners***
//Apply eventlister to all spaces in grid
spaces.forEach( items => {items.addEventListener('click', clickTest)});


