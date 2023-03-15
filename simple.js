const colorSimple = ["red", "cyan", "green"];
const btn = document.getElementById("btn");
const color = document.querySelector("color")

btn.addEventListener("click", function(){
    const  randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colorSimple[randomNumber];
    color.textContent = colorSimple[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()* colorSimple.length);
}