
var numOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var picked = this.textContent.trim().toLowerCase();
        playFunction(picked);
        buttonAnimation(picked);
    });
}

document.addEventListener("keypress", function (event) {
    console.log(event.key);
    var key = event.key.trim().toLowerCase();
    playFunction(key);
    buttonAnimation(key)
});


function playFunction (key) {
    var source;
    switch (key) {
        case "w":
            source = "crash.mp3";
            break;
        case "a":
            source = "kick-bass.mp3";
            break;
        case "s":
            source = "snare.mp3";
            break;
        case "d":
            source = "tom-1.mp3";
            break;
        case "j":
            source = "tom-2.mp3";
            break;
        case "k":
            source = "tom-3.mp3";
            break;
        case "l":
            source = "tom-4.mp3";
            break;
        default:
            console.log("Error", this);
            break;
    }

    if (source != null) {
        var audio = new Audio(`./sounds/${source}`);
        audio.play();
    }
}

function buttonAnimation(key) {
    document.querySelector(`.${key}`).classList.add("pressed");
    setTimeout(() => { document.querySelector(`.${key}`).classList.remove("pressed");}, 1000)
}