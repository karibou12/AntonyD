// event on load
window.onload = write();

// textIntro like scripting
let i = 0
let txt = 'From TROYES to DETROIT'; /* The textIntro */
let speed = 80; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function write() {
    setTimeout(typeWriter, 1000)
    return null
}


// hidden written text
let btnStart = document.getElementsByClassName('btnStart')[0];
let btnSkip = document.getElementsByClassName('btnSkipIntro')[0];

btnStart.addEventListener('click', delayText);
btnSkip.addEventListener('click', textOFF);

function textOFF() {
    let text = document.getElementsByClassName('textIntro')[0];
    text.style.display = "none";
}

function delayText() {
    setTimeout(textOFF, 1000);
    return null
}


// vinyl rotation
btnStart.addEventListener('click', vinylRotate);
btnSkip.addEventListener('click', vinylRotate);


function vinylRotate() {

    let discVinyl1 = document.getElementsByClassName('vinyl')[0];
    let discVinyl2 = document.getElementsByClassName('vinyl')[1];

    discVinyl1.classList.add("rotate");
    discVinyl2.classList.add("rotate");


}


// active section class
btnStart.addEventListener('click', delayHeader);
btnSkip.addEventListener('click', delayHeader);

function headerMain() {
    let allSections = document.getElementsByTagName('section');
    let divSkip = document.getElementsByClassName('skipIntro')[0];
    let nav = document.getElementsByClassName('navOff')[0];
    let header = document.getElementsByTagName('header')[0];

    for (let i = 0 ;i < allSections.length ; i++) {
         allSections[i].style.display = "flex";
    }
    divSkip.style.display = 'none';
    nav.setAttribute('class', 'navOn');
    header.style.position = 'sticky';
}


function delayHeader() {
    setTimeout(headerMain, 1000);
}


// move title
btnStart.addEventListener('click', delayMoveTitle);
btnSkip.addEventListener('click', moveTitle);

function moveTitle() {

    let titre = document.getElementsByClassName('titre')[0];
    titre.setAttribute('class', 'titre-header');
}

function delayMoveTitle() {
    setTimeout(moveTitle, 10);
}


// rotate text on mouseover
const text = document.querySelector('.circleText');
text.innerHTML = text.textContent.replace(/./g,"<span>$&</span>");


const element = document.querySelectorAll('span');
for (let i = 0; i<element.length; i++){
    element[i].style.transform = "rotate("+i*14+"deg)"
}







