window.onscroll = () => {
    parallax()
    scrollDetect();
    // soundcloud()
    discography();
    pastEvents()
    rotateText()
}

//
// window.onresize = () => {
//     soundcloud()
// }


function parallax() {

    let lasted = document.getElementsByClassName('lasted')[0];
    let next = document.getElementsByClassName('next')[0];

    let winScrollY = window.pageYOffset;
    console.log(window.pageYOffset);
    if (winScrollY < 900) {
        document.addEventListener('scroll', parallax);
        lasted.style.setProperty(
            'transform',
            `translateX(${-winScrollY}px)`,
        )
        next.style.setProperty(
            'transform',
            `translateX(${winScrollY}px)`
        )

    } else {
        document.removeEventListener('scroll', parallax);
    }
}


function soundcloud() {


    let player = document.getElementsByClassName('player')[0];
    let ui = document.getElementsByClassName('ui container')[0];


    let minWith = 220;
    let maxMarge = (window.innerWidth - 1000) /2
    let maxWidth = window.innerWidth - 560;
    // let maxWidth = window.innerWidth - 560 - marge;

    let uiPos = player.offsetTop;
    let winOffset = window.pageYOffset;
    let ratio = (maxWidth - minWith) / uiPos;

    if (uiPos - winOffset > 0) {
        ui.style.top = uiPos - winOffset + 'px';
        ui.style.width = minWith + (ratio * (uiPos - winOffset)) + 'px';
    }


    // if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 150) {
    //     player.style.marginTop = "-595px";
    //     player.style.transition = "1s";
    // } else {
    //     player.style.marginTop = "0";
    //     player.style.transition = "0.6s";
    // }
    //
    //
    //


}


function scrollDetect() {

    let player = document.getElementsByClassName('player')[0];

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 150) {
        player.style.marginTop = "-595px";
        player.style.transition = "1s";
    } else {
        player.style.marginTop = "0";
        player.style.transition = "0.6s";
    }
}


function discography() {

    let discography = document.getElementsByClassName('discography')[0];
    let titleBio = document.getElementsByClassName('titleBio')[0];

    if (document.documentElement.scrollTop > 1100) {

        // discography.style.marginTop = "0px";
        // discography.style.transition = "0.6s";
        titleBio.style.height = "60px";
        titleBio.style.transition = "0.6s";
    } else {
        // discography.style.marginTop = "500px";
        // discography.style.transition = "1s";
        titleBio.style.height = "400px";

    }
}


function pastEvents() {

    const pastImg = document.getElementsByClassName('pastImage');

    function randomTime(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    if (document.documentElement.scrollTop > 2600) {

        for (let elem = 0; elem < pastImg.length; elem++) {

            setTimeout(function () {
                pastImg[elem].style.opacity = '1';
                pastImg[elem].style.transition = "0.2s";

            }, randomTime(200, 400) * elem)
        }

    } else {

        for (let elem = 0; elem < pastImg.length; elem++) {

            pastImg[elem].style.opacity = '0';

        }
    }
}


function rotateText() {

    let element = document.getElementsByClassName("circleText")[0];

    if (document.documentElement.scrollTop > 3100) {
        element.classList.add('animated');
    } else {
        element.classList.remove('animated');
    }
}




