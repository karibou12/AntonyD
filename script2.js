// evenement au demarage
window.onload = delay();

// textIntro façon ecriture
let i = 0;
let txt = 'From TROYES to DETROIT'; /* The textIntro */
let speed = 120; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function delay() {
    setTimeout(typeWriter, 1000)
}




// cache le texte ecrit
let btnStart = document.getElementsByClassName('btnStart')[0];

btnStart.addEventListener('click', delayText);

function texteOFF() {
    let texte = document.getElementsByClassName('textIntro')[0];
    texte.style.display = "none";
}

function delayText() {
    setTimeout(texteOFF, 1000)
}



// rotation vinyl
btnStart.addEventListener('click', () => {

    let discVinyl1 = document.getElementsByClassName('vinyl')[0];
    let discVinyl2 = document.getElementsByClassName('vinyl')[1];

    discVinyl1.classList.replace("vinyl", "vinylRotate");
    discVinyl2.classList.replace("vinyl", "vinylRotate");


})


// active header avec delay rotation vinyl
btnStart.addEventListener('click', delayHeader);
let welcome = document.getElementsByClassName('welcomeOn')[0];
function headerMain() {


    let nav = document.getElementsByClassName('navOff')[0];
    let texte = document.getElementsByClassName('textIntro')[0];
    let avatar = document.getElementsByClassName('avatarOff')[0];
    let vinylRotate1 = document.getElementsByClassName('vinylRotate')[0];
    let vinylRotate2 = document.getElementsByClassName('vinylRotate')[1];
    let footerOn = document.getElementsByClassName('player')[0];
    // let welcome = document.getElementsByClassName('welcomeOn')[0];
    let card = document.getElementsByClassName('cardOff')[0];
    let biography = document.getElementsByClassName('biography')[0];
    let discography = document.getElementsByClassName("discography")[0];



    nav.setAttribute('class', 'navOn');
    texte.setAttribute('class', 'textOff');
    avatar.setAttribute('class', 'avatarOn');
    footerOn.setAttribute('class', 'footerOn');
    welcome.setAttribute('class', 'welcome');
    card.setAttribute('class', 'cardOn');
    biography.setAttribute('class', 'biographyOn')
    discography.setAttribute('class', 'discographyOn')

}



function delayHeader() {
    setTimeout(headerMain, 2000);
}


// move title
btnStart.addEventListener('click', delayMoveTitle);

function moveTitle() {
    
 let titre = document.getElementsByClassName('titre')[0];
 titre.setAttribute('class', 'titre-header');
}
function delayMoveTitle() {
    setTimeout(moveTitle, 1000);
}







//active who I am section
let whoI = document.querySelector('.whoI');
let disco = document.querySelector('.disco');

let biography = document.querySelector('.biography');
const welcomeOn = document.querySelector('.welcome');
let discography = document.querySelector('.discography');


whoI.addEventListener('click', () => {
    biography.classList.toggle("biographyOn");
    discography.classList.replace("discographyOn", "discography");

    if (biography.classList === "biography biographyOn"){
        welcome.classList.replace("welcome", "welcomeOn");
    }else{
        welcome.classList.replace("welcomOn", "welcome");
    }

});



disco.addEventListener('click', () => {
    discography.classList.toggle("discographyOn");
    biography.classList.replace("biographyOn", "biography");

    if (discography.classList === "discography discographyOn"){
        welcome.classList.replace("welcome", "welcomeOn");
    }else{
        welcome.classList.replace("welcomeOn", "welcome");
    }

});











