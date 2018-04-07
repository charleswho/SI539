var target = document.getElementById("target");
var words = ["a designer", "a thinker", "a traveler", "an artist", "a student", "a life lover", "a researcher", "an entrepreneur", "creative"];
var counter = 0;
var canvas = document.getElementById("defaultCanvas0");


function setup() {
    frameRate(10);
    canvas.style="display:none;";
}

function draw() {
    if (frameCount % 30 < 15) {
        counter += 3;
        if (counter >= words.length) counter = counter % (words.length - 1);
        target.innerHTML = words[counter];
    }

}
