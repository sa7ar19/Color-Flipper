const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "f"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
let sec = document.querySelector("section");
let logo = document.querySelector("h3");



btn.addEventListener('click', function (){
    let hexColor = "#";
    for(i=0; i < 6; i++){
        hexColor += hex[getRandomNum()];
    }

    color.textContent = hexColor;
    sec.style.backgroundColor = `${hexColor}`;
    logo.style.color = `${hexColor}`;


})

function getRandomNum(){
    return Math.floor(Math.random()* hex.length);
}