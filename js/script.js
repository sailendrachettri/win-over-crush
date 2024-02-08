let yesbtn = document.getElementById("yes-btn");
let nobtn = document.getElementById("no-btn");

let introMag = document.getElementById("intro-msg");

let firstGif = document.getElementById("first-gif");
let secondGif = document.getElementById("second-gif");
let lastGif = document.getElementById("last-gif");

let fontSize = 35;
let noMsg = ["Really?", "Are you Sure?", "Sach mai?", "Are you Serious?", "Don't make me cry!", "Are you absolutely sure?", "Are you completely sure?"]

function yesBtn(){
    lastGif.style.display = "block";
    firstGif.style.display = "none";
    secondGif.style.display = "none";
    introMag.innerText = "I knew it you too want me :)"
    nobtn.disabled = true;  
    yesbtn.style.fontSize = "2rem";
    nobtn.innerText = "HeHe ;)"
}


function noBtn(){
    firstGif.style.display = "none";
    secondGif.style.display = "block";

    fontSize += 20;
    yesbtn.style.fontSize = `${fontSize}px`;

    let rand = Math.floor(Math.random()*6)
    nobtn.innerText = noMsg[rand];
}