let mode = 6;
let colors = generateRandomColor(mode);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let display = document.getElementById("display");
let displayMessage = document.querySelector("#message");
display.textContent = pickedColor;
let resetButton = document.querySelector("#reset");
let h1 = document.querySelector("h1");
let num = document.querySelectorAll(".num");
for(let i=0; i<num.length; i++){
    num[i].addEventListener("click", function(){
        num[0].classList.remove("selected");
        num[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? mode = 3: mode = 6;
        reset();
    })
}
function reset(){
    colors = generateRandomColor(mode);
    pickedColor = pickColor();
    display.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    displayMessage.textContent = "";
    for(let i=0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}
resetButton.addEventListener("click", function(){
   reset();
})
for(let i=0; i< squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            displayMessage.textContent = "Correct!";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
        }
        else{
            displayMessage.textContent = "Try Again!"
            this.style.backgroundColor = "#232323";
        }
    });
}
function changeColor(color){
    for(let i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColor(num){
    let arr = [];
    for(let i=0; i< num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}