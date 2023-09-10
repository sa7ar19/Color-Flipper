let sec = document.querySelector("section");
let btn = document.querySelector("#btn");
let color = document.querySelector(".color");
let logo = document.querySelector("h3");

const colors = ["red","green", "blue", "yellow", "brown", "violet", "chartreuse", "blueviolet", "darkslateblue", "darkmagenta", "gold"];

btn.addEventListener('click' , function(){
    let random = Math.floor(Math.random() * colors.length);
    color.textContent = `${colors[random]}`;
    sec.style.backgroundColor = `${colors[random]}`;
    logo.style.color = `${colors[random]}`;
});
