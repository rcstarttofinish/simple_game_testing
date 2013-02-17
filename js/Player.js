var Player = function(x1, y1) {
	// Variables
	this.x = x1; // The player's x position
	this.y = y1; // The player's y position
	this.xPrev = x1; // The player's last x position
	this.yPrev = y1; // The player's last y position
	this.moveSpeed = 1; // The speed at which the playe can move
	
	// Functions
	
	// Update the player position
	this.move = function() {
		// W = 87, A = 65, S = 83, D = 68,
		// Up = 38, Down = 40, Right = 39, Left = 37
		
		// Sets the players last position to the current one
		this.xPrev = this.x;
		this.yPrev = this.y;
		
		// Changes the players position
		if (39 in keysDown || 68 in keysDown) { // Player holding right or D
			this.x += this.moveSpeed;
		}
		if (37 in keysDown || 65 in keysDown) { // Player holding left or A
			this.x -= this.moveSpeed;
		}
		if (38 in keysDown || 87 in keysDown) { // Player holding up or W
			this.y -= this.moveSpeed;
		}
		if (40 in keysDown || 83 in keysDown) { // Player holding down or S
			this.y += this.moveSpeed;
		}
		
	};
	
	// Draws the player
	this.render = function() {
		//Draws and fills a circle
		ctx.beginPath();
		ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		//Draws a border for the circle
		ctx.lineWidth = 1;
		ctx.strokeStyle = '#003300';
		ctx.stroke();
	};
};