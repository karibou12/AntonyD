let discoTrack = {"track":[
{
"name":"Back In Da Dayz",
"label":"Bek Audio",
"image":"BEK042.jpg"
},

{
"name":"Never Too Old For That Shit",
"label":"A-traction",
"image":"Never_to_old_for_that_shit.jpg"

}
]};


discography = document.getElementsByName('discographys')[0];

for ( const elem in discoTrack.track) {
    let divTrack = document.createElement('div');
    
    divTrack.setAttribute('class', 'divTrack');
    divTrack.style.width = '400px';
    divTrack.style.display = 'flex';
    divTrack.style.justifyContent = 'space-between';
    
    
    let trackName = document.createElement('p');
    trackName.textContent = discoTrack.track[elem].name;
    
    let trackLabel = document.createElement('p');
    trackLabel.textContent = discoTrack.track[elem].label;
    
    let trackImg = document.createElement('img');
    trackImg.src = discoTrack.track[elem].image;
    trackImg.style.height = '50px';
    
    
    
    document.getElementsByClassName('discography')[0].appendChild(divTrack);
    document.getElementsByClassName('divTrack')[elem].appendChild(trackImg);
    document.getElementsByClassName('divTrack')[elem].appendChild(trackName);
    document.getElementsByClassName('divTrack')[elem].appendChild(trackLabel);
    
    
};



// class Track {
//     constructor(name, label, image) {

//         this.name = name;
//         this.label = label;
//         this.image = image;

//     }
// }

// let BackInTheDayz = new Track("Back In Da Dayz","Bek Audio","BEK042.jpg");

