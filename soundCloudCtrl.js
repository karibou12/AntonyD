var widget = new SoundcloudWidget('soundcloud')

var playBtn = document.getElementById('play-button')
var playIcon = playBtn.querySelector('i')

var muteBtn = document.getElementById('mute-button')
var muteIcon = muteBtn.querySelector('i')

var backBtn = document.getElementById('back-button')
var forwardBtn = document.getElementById('forward-button')
var progressContainer = document.getElementById('progress-container')
var progressBar = document.getElementById('progress-bar')

widget.on(SoundcloudWidget.events.PLAY, function () {
    playIcon.classList.add('pause')
    playIcon.classList.remove('play')
})

widget.on(SoundcloudWidget.events.PAUSE, function () {
    playIcon.classList.add('play')
    playIcon.classList.remove('pause')


})

widget.on(SoundcloudWidget.events.PLAY_PROGRESS, function (progress) {
    var maxWidth = progressContainer.offsetWidth
    var position = progress.relativePosition
    var newWidth = Math.floor(maxWidth * position)

    progressBar.style.width = newWidth + 'px'
})

muteBtn.addEventListener('click', function () {
    widget.getVolume().then(function (volume) {
        if (volume > 0) {
            widget.setVolume(0)
            muteIcon.classList.remove('mute')
            muteIcon.classList.add('unmute')
        } else {
            widget.setVolume(100)
            muteIcon.classList.add('mute')
            muteIcon.classList.remove('unmute')
        }
    })
})

playBtn.addEventListener('click', function () {
    let vinyl = document.getElementsByClassName('vinyl');
    widget.toggle();
    for (let i = 0; i < vinyl.length ; i++) {
        vinyl[i].classList.toggle('vinylRotateInf');
    }


})

forwardBtn.addEventListener('click', function () {
    widget.seekTo(0)
    widget.next()
})

backBtn.addEventListener('click', function () {
    widget.seekTo(0)
    widget.prev()
})

progressContainer.addEventListener('click', function (event) {
    var el = progressContainer
    var width = el.offsetWidth
    var rect = el.getBoundingClientRect()
    var position = event.clientX - rect.left + document.body.scrollLeft
    var percent = position / width

    widget.getDuration().then(function (duration) {
        var newPosition = Math.floor(duration * percent)

        widget.seekTo(newPosition)
    })
})

// widget.on(SoundcloudWidget.events.READY, function () {
//     var container = document.getElementById('loader')
//     container.classList.remove('active')
// })