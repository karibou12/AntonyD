let discoTrack =

    {
        "results": [
            {
                "name": "Trax",
                "mix_name": "AA trax",
                "cover": "images/fond-vintage-disque-vinyle_260559-180.jpg",
                "label": "AA label",
            }, {
                "name": "Trax",
                "mix_name": "AA trax",
                "cover": "images/fond-vintage-disque-vinyle_260559-180.jpg",
                "label": "AA label",
            }, {
                "name": "Trax",
                "mix_name": "AA trax",
                "cover": "images/fond-vintage-disque-vinyle_260559-180.jpg",
                "label": "AA label",
            }, {
                "name": "Trax",
                "mix_name": "AA trax",
                "cover": "images/fond-vintage-disque-vinyle_260559-180.jpg",
                "label": "AA label",
            },   {
                "name": "Trax",
                "mix_name": "AA trax",
                "cover": "images/fond-vintage-disque-vinyle_260559-180.jpg",
                "label": "AA label",
            }, {
                "name": "Trax",
                "mix_name": "AA trax",
                "cover": "images/fond-vintage-disque-vinyle_260559-180.jpg",
                "label": "AA label",
            }, {
                "name": "Trax",
                "mix_name": "AA trax",
                "cover": "images/fond-vintage-disque-vinyle_260559-180.jpg",
                "label": "AA label",
            }, {
                "name": "Trax",
                "mix_name": "AA trax",
                "cover": "images/fond-vintage-disque-vinyle_260559-180.jpg",
                "label": "AA label",
            },{
                "name": "Trax",
                "mix_name": "AA trax",
                "cover": "images/fond-vintage-disque-vinyle_260559-180.jpg",
                "label": "AA label",
            }, {
                "name": "Trax",
                "mix_name": "AA trax",
                "cover": "images/fond-vintage-disque-vinyle_260559-180.jpg",
                "label": "AA label",
            }, {
                "name": "Trax",
                "mix_name": "AA trax",
                "cover": "images/fond-vintage-disque-vinyle_260559-180.jpg",
                "label": "AA label",
            }, {
                "name": "Trax",
                "mix_name": "AA trax",
                "cover": "images/fond-vintage-disque-vinyle_260559-180.jpg",
                "label": "AA label",
            },   {
                "name": "Trax",
                "mix_name": "AA trax",
                "cover": "images/fond-vintage-disque-vinyle_260559-180.jpg",
                "label": "AA label",
            }, {
                "name": "Trax",
                "mix_name": "AA trax",
                "cover": "images/fond-vintage-disque-vinyle_260559-180.jpg",
                "label": "AA label",
            }, {
                "name": "Trax",
                "mix_name": "AA trax",
                "cover": "images/fond-vintage-disque-vinyle_260559-180.jpg",
                "label": "AA label",
            }, {
                "name": "Trax",
                "mix_name": "AA trax",
                "cover": "images/fond-vintage-disque-vinyle_260559-180.jpg",
                "label": "AA label",
            },


    ]

    }


discography = document.getElementsByName('discographys')[0];


for (const elem in discoTrack.results) {
    let divTrack = document.createElement('div');
    divTrack.setAttribute('class', 'divTrack');


    let trackName = document.createElement('p');
    trackName.textContent = discoTrack.results[elem].name;

    let trackLabel = document.createElement('p');
    trackLabel.textContent = discoTrack.results[elem].label;

    let trackImg = document.createElement('img');
    trackImg.src = discoTrack.results[elem].cover;
    trackImg.style.height = '50px';

    let track = document.createElement('AUDIO');
    track.setAttribute("src", discoTrack.results[elem].sample_url);
    track.setAttribute("controls", "controls")

    document.getElementsByClassName('discography')[0].appendChild(divTrack);
    document.getElementsByClassName('divTrack')[elem].appendChild(trackImg);
    document.getElementsByClassName('divTrack')[elem].appendChild(track);
    document.getElementsByClassName('divTrack')[elem].appendChild(trackName);
    document.getElementsByClassName('divTrack')[elem].appendChild(trackLabel);

}
const audio = document.querySelectorAll('audio');
const track = document.getElementsByClassName('divTrack')[0];

console.log(track)

document.addEventListener("click", () => {

        track.play();
    }
)

