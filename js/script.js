let yesbtn = document.getElementById("yes-btn");
let nobtn = document.getElementById("no-btn");

let introMag = document.getElementById("intro-msg");

let firstGif = document.getElementById("first-gif");
let secondGif = document.getElementById("second-gif");
let lastGif = document.getElementById("last-gif");

let fontSize = 35;
let noMsg = ["Really?", "Are you Sure?", "Sach mai?", "Are you Serious?", "Don't make me cry!", "Are you certain?", "Do you really know?", "Can you confirm?", "Are you positive?", "Are you convinced?", "Is that a fact?", "Are you confident?", "Do you have no doubt?", "Are you absolutely sure?", "Are you certain of that?", "Are you confident about that?", "Are you completely sure?", "Can you vouch for it?", "Are you clear on that?", "Are you certain of your answer?", "Can you affirm that?"]

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

    yesbtn.style.fontSize = `${fontSize}px`;
    fontSize += 10;

    let rand = Math.floor(Math.random()*20)
    nobtn.innerText = noMsg[rand];
}