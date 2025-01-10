const bird = document.querySelector(".flappyBird");
const startGame = document.getElementById("start");
const title = document.getElementById("title");

function randomizeObstacles() {
    const obstacle = {
        height: Math.floor(Math.random()) + 100,
        position: Math.round(Math.random())
    };

    const obstacleDiv = document.createElement("div");

    if (obstacle.position == 1) {
        obstacleDiv.style.top = 0;
    } else if (obstacle.position == 0) {
        obstacleDiv.style.bottom = 0;
    }

    obstacleDiv.style.height = `${obstacle.height}px`;
    obstacleDiv.style.width = "20px";
    obstacleDiv.style.backgroundColor = "green";
    document.querySelector(".gameFrame").append(obstacleDiv);

}

function removeTitleScreen() {
    document.querySelector(".gameFrame").removeChild(title);
    document.querySelector(".gameFrame").removeChild(start);
    document.querySelector(".gameFrame").style.padding = 0;
    bird.style.margin = 0;
}

start.addEventListener("click", () => {
    removeTitleScreen();
    randomizeObstacles();
})

let birdTop = bird.style.top.replace("px", "");
birdTop = parseInt(birdTop);

while (birdTop > 0) {
    setInterval(() => {
        birdTop -= 1;
        bird.style.top = `${birdTop}px`;
    }, 1000);
    console.log(birdTop);
}

document.addEventListener("keydown", event => {
    if (event.key === " ") {
        bird.style.backgroundImage = "url('flappysprite2.png')";
    }
    // Make the bird rise one pixel when the space bar is clicked
    bird.style.top = `${birdTop - 1}px`;

    console.log(bird.style.top);
});

document.addEventListener("keyup", event => {
    if (event.code === "Space") {
        // When the user releases the space bar, revert back to the original sprite
        bird.style.backgroundImage = "url('flappysprite1.png')";
    }
});
