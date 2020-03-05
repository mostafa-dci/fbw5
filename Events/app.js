// First Event is onload window
window.onload = function(){
    // anything you put it here it will excuted after the all document is loaded
    printBody();
} 
function printBody(){
    console.log(document.body)
}

// The second important Event Click :)
function clickEventHandlerMostafa(){
    alert("done");
    console.log("done again");
}
// The forth important Event double Click :)
function doubleClickMostafa(){
    alert("done");
    console.log("double cklicked!")
}

// The 5. important Event mouse over :)
function mouseOver(){
    console.log("mouse over")
}

// The 6. important Event onchange :)
function change(){
    console.log("changed!")
} 
// The 7. important Event key pressed :)
function keypress(arg){
    console.log(arg)
}


