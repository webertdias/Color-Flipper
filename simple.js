const colorSimple = ["red", "cyan", "green", "yellow", "orange"];
const btn = document.getElementById("btn");
const color = document.querySelector("span")

btn.addEventListener("click", function(){
    const  randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colorSimple[randomNumber];
    color.textContent = colorSimple[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()* colorSimple.length);
}