const bird = document.getElementById("flappyBird");
let birdColor = document.getElementById("birdColor").innerText.toLowerCase();

function colorYourBird() {
    if (birdColor.length >= 0 && CSS.supports("background-color", birdColor)) {
        bird.style.backgroundColor = birdColor;
    } else if (!CSS.supports("background-color", birdColor)) {
        console.warn("Error! Color name invalid :(");
        bird.innerText = "Invalid color name :<";
    } else {
        bird.style.backgroundColor = "#ffffff";
    }
}

document.addEventListener("keypress", event => {
    if (event.key === "enter") {
        colorYourBird();
    }
});

