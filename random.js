

let btn = document.getElementById("btn");
let code = document.getElementById("code");

 let container = document.querySelector(".container");
function randomNumber(){

    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
     let blue= Math.floor(Math.random()*255);

    let num = `rgb(${red},${green},${blue})`;
    console.log(num);
    return num;
}

randomNumber();
btn.addEventListener('click', function(){
  
   let color = randomNumber();
   code.innerText = color;
   code.style.color = color;
   container.style.background = color;

   ;
   

})

