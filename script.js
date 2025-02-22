const bird = document.querySelector(".flappyBird");
const startGame = document.getElementById("start");
const title = document.getElementById("title");

function randomizeObstacles() {
    // Create an obstacle object defining the height and position of the obstacle
    const obstacle = {
        height: Math.floor(Math.random()) + 100,
        position: Math.round(Math.random())
    };

    // Create a div to store the obstacle
    const obstacleDiv = document.createElement("div");

    /* If obstacle position is 1, the element is 0px away from the top of the frame.
    If obstacle position is 0, the element is 0px away from the bottom of the frame. */
    if (obstacle.position == 1) {
        obstacleDiv.style.top = 0;
    } else if (obstacle.position == 0) {
        obstacleDiv.style.bottom = 0;
    }

    // Set the height and width of the obstacles and append it to the document
    obstacleDiv.style.height = `${obstacle.height}px`; // Set CSS height
    obstacleDiv.style.width = "20px"; // Set CSS width
    obstacleDiv.style.backgroundColor = "green"; // Set CSS background color
    document.querySelector(".gameFrame").append(obstacleDiv); // Add the obstacles to the window
}

function removeTitleScreen() {
    // Remove all the elements in the beginning screen
    document.querySelector(".gameFrame").removeChild(title); // Remove game title
    document.querySelector(".gameFrame").removeChild(start); // Remove start button
    document.querySelector(".gameFrame").style.padding = 0; // Set the window's padding to 0
    bird.style.margin = 0; // Set the bird's margin to 0

    // Set the bird's initial style
    bird.style.bottom = "100px"; // Set CSS bottom to 100px on start
    bird.style.top = "100px"; // Set CSS top to 100px on start

    const birdStyles = window.getComputedStyle(bird); // Get all the CSS styles of the bird

    const birdBottom = birdStyles.getPropertyValue("bottom"); // Get the bottom property of the bird
    console.log(birdBottom); // Log it to the console
    const birdTop = birdStyles.getPropertyValue("top"); // Get the top property of the bird
    console.log(birdTop); // Log it to the console

    let birdBottomNumber = birdBottom.replace("px", ""); // Replace "px" with emptiness
    birdBottomNumber = parseInt(birdBottomNumber); // Parse the output (expected 100) as an integer
    let birdTopNumber = birdTop.replace("px", ""); // Replace "px" with emptines
    birdTopNumber = parseInt(birdTopNumber); // Parse the output as an integer

    console.log(birdBottomNumber); // Log bottom value to console
    console.log(birdTopNumber); // Log top value to console

    // While the bird's bottom and top value is greater than 0 (hasn't touched the floor), make the bird drop by 1 pixel every second
    while (birdBottomNumber > 0 && birdTopNumber > 0) {
        setInterval(() => {
            birdBottom -= 1;
            bird.style.bottom = `${birdBottom}px`;
        }, 1000);
    } 
    
    // If the bird is on the floor or ceiling, reload the page (placeholder for game over)
    if (birdBottomNumber == 0 || birdTopNumber == 0) {
        location.reload();
    }
}

// When you start the game, remove the title screen and generate obstacles 
start.addEventListener("click", () => {
    removeTitleScreen();
    randomizeObstacles();
});

document.addEventListener("keydown", (event, birdBottomNumber) => {
    // If the space bar is pressed, change the background image to the jumping sprite
    if (event.key === " ") {
        bird.style.backgroundImage = "url('flappysprite2.png')";
    }
    // Make the bird rise one pixel when the space bar is clicked
    bird.style.bottom = `${birdBottomNumber + 1}px`;

});

document.addEventListener("keyup", event => {
    // If the user releases the space bar, revert back to the original sprite
    if (event.code === "Space") {
        bird.style.backgroundImage = "url('flappysprite1.png')";
    }
});