const video = document.getElementById('video');

const button = document.getElementsByClassName("playButton")[0];

button.onclick = function () {
    video.play();
}
   