// Create the canvas
var canvas = document.createElement("canvas"); // Creates a new canvas
var ctx = canvas.getContext("2d"); // Lets us use some 2d stuff on it
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas); // Adds the canvas to the page

//Game Objects
var player; // Creates a variable that will a player

// Handle keyboard controls
var keysDown = {}; // An array that holds the keys that are currently pressed
addEventListener("keydown", function (e) { keysDown[e.keyCode] = true; }, false); // Checks if any keys have been pressed
addEventListener("keyup", function (e) { delete keysDown[e.keyCode]; }, false); // Checks if any keys have been released

// Reset / Begin the game
var reset = function () {
	player = new Player(canvas.width / 2, canvas.height / 2); // Sets the player variable to a new Player
};

// Update game objects
var update = function () {
	player.move(); // Updates the player's position
};

// Draw everything
var render = function () {
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the screen
	player.render(); // Draws the player
};

// The main game loop
var main = function () {
	update();
	render();
};

// Begin the game
reset();
setInterval(main, 15); // Execute at around 30 fps