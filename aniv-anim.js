//import"./style.css";

let entete = document.getElementById("entete");
let text = "JOYEUX ANNIVERSAIRE A TOITOUS MES MEILLEURS VOEUX!";

let index = 0;

const randomspeed = (min, max) => {
    return Math.floor(Math.random() *(max - min) + min);  
}


const play = () => {
    entete.innerHTML = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }

    clearInterval(timer)
    timer = setInterval(play, randomspeed(50, 300))
};

let timer = setInterval(play, 250)

