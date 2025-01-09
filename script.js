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
        console.log("Top log successful! Top: " + obstacleDiv.style.top);
    } else if (obstacle.position == 0) {
        obstacleDiv.style.bottom = 0;
        console.log("Bottom log successful! Bottom: " + obstacleDiv.style.bottom);
    }

    obstacleDiv.className = "obstacle";
    obstacleDiv.style.height = `${obstacle.height}px`;
    obstacleDiv.style.width = "10px";
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

document.addEventListener("keydown", event => {
    if (event.key === " ") {
        bird.style.backgroundImage = "url('flappysprite2.png')";
    }

    bird.style.top = `${bird.style.top + 1}px`;
})

