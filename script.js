function openInvitation() {

    const opening = document.getElementById("opening");
    const overlay = document.getElementById("overlay");

    opening.style.opacity = "0";

    setTimeout(function () {
        opening.style.display = "none";
        overlay.style.display = "flex";
    }, 1000);
}


function closeInvitation() {

    document.getElementById("overlay").style.display = "none";

}


function acceptInvitation() {

    const overlay = document.getElementById("overlay");
    const videoOverlay = document.getElementById("videoOverlay");
    const video = document.getElementById("programmerVideo");

    overlay.style.display = "none";

    videoOverlay.style.display = "flex";

    video.currentTime = 0;

    video.play();

}


function closeVideo() {

    const videoOverlay = document.getElementById("videoOverlay");
    const video = document.getElementById("programmerVideo");

    video.pause();

    videoOverlay.style.display = "none";

}


function showThankYou() {

    const videoOverlay = document.getElementById("videoOverlay");
    const thankOverlay = document.getElementById("thankOverlay");
    const video = document.getElementById("programmerVideo");

    video.pause();

    videoOverlay.style.display = "none";

    thankOverlay.style.display = "flex";

}