
define(["jquery", "app/ball.js", "app/brick.js", "app/pad.js", "app/canvas.js"],
function($, Ball, Brick, Pad, Canvas) {

	var Game, proto, canvasWidth, canvasHeight, canvasID
	brickRows = 5,
	brickCols = 10,
	ballRadius = 10,
	ballSpeed = 5,
	padWidth = 150,
	padHeight = 15,
	padRadius = 5,
	padSpeed = 20,
	canvasPadding = 10,
	bricksPadding = 15,
	brickHeight = 20,
	brickWidth = 100;
	


	/*
	*       Constructors
	*/

	function makeNewGame(canvasObj) {
		var base = Object.create(proto);
		base.canvas = Canvas.new(canvasObj);
		base.stage = canvasObj;
		base.canvasWidth = base.stage.canvas.width;
		base.canvasHeight = base.stage.canvas.height;
		base.bricks = [];
		base.ball = Ball.new(ballRadius, ballSpeed, 0,0, "#(000000)", base.canvasWidth/2, base.canvasHeight - 70);//rad, spd, dirc, colr, pos
		base.pad = Pad.new(padWidth, padHeight, padRadius, padSpeed, 0, "#(111111)",  base.canvasWidth/2 - padWidth/2, base.canvasHeight - 70 + ballRadius);
		this.prevBall = null;
		base.time = null;
		base.bricksDestroyed = [];
		base.deadBricks = 0;
		base.prevBall = {"x": 0, "y": 0};
		base.intervalID = null
		return base;
	}


	/*
	*       Prototype / Instance methods
	*/
	//handle gamePlay
	

	proto = {
		startGame: function(){
			var that = this;
			this.initGame();
			this.canvas.start(this.getState(), this.stage);
			this.intervalID = window.setInterval(function(){that.loop();}, 1000/50);
		},
		initGame: function(){
			var that = this, posX = 10, posY = 10, i = 0, j = 0;
			//adding listener to windows
			window.addEventListener('keydown', function (evt) {
				
			    switch (evt.keyCode) {
			        // Left arrow
			        case 37:
			        	that.pad.directionX = -1;
			            break;
			        // Right arrow   
			        case 39:
			        	that.pad.directionX = 1;
			            break;
			    }
			}, true);
			//setting all bricks
			for(i = 0; i < brickRows; i++){
				for(j = 0; j < brickCols; j++){
					this.bricks.push( Brick.new(brickWidth, brickHeight,posX, posY, "#00FEAA") );
					posX +=  brickWidth + bricksPadding;
				}
				posY += brickHeight + bricksPadding;
				posX = 10;
			}

			//start ball movement
			this.ball.directionX = -1;
			this.ball.directionY = 1;
		},
		getState: function(){
			return {
				"ball": this.ball,
				"pad": this.pad,
				"bricks": this.bricks,
				"bricksDestroyed": this.bricksDestroyed
			};

		},
		positionBricks: function(numRows, numCol){
			var brick = Brick.new(brickWidth, brickHeight, {"x": 100, "y": 100}, "rgb(0,0,0)");
			this.drawBrick(brick);
		},

		loop: function(){
			console.log("oi");
			this.movePad();
			this.pad.directionX = 0;
			this.ballCollisions();
			this.canvas.render(this.getState(), this.stage);
		},
		ballCollisions: function(){
			this.ballCollideWithWindow();
			this.ballCollideWithBricks();
			this.ballCollideWithPad();
			this.prevBall.x = this.ball.x;
			this.prevBall.y = this.ball.y;
			this.ball.y -= this.ball.speed * this.ball.directionY;
			this.ball.x -= this.ball.speed * this.ball.directionX;
						
		},
		ballCollideWithPad: function(){
			//testing if the ball is inside or on the edges of the pad
			if(this.ball.x + this.ball.radius >= this.pad.x &&
			   this.ball.x - this.ball.radius < this.pad.x + this.pad.width &&
			   this.ball.y + this.ball.radius > this.pad.y &&
			   this.ball.y - this.ball.radius < this.pad.y + this.pad.height){

				if(this.prevBall.x + this.ball.radius >= this.pad.x &&
			   	   this.prevBall.x - this.ball.radius < this.pad.x + this.pad.width){
			   	   	//if it hit the top part of the pad
					this.ball.directionY *= -1;
				}else{
					//if it hit the sides of the pad
					this.ball.directionX *= -1;
				}
			}
		},
		BallInBrick: function(brick){
			//bottom part of the brick
			if(brick.dead){
				return false;
			}
			return ((this.ball.y - this.ball.radius < brick.y + brick.height) &&
			   (this.ball.x + this.ball.radius > brick.x) &&
			   (this.ball.x + this.ball.radius < brick.x + brick.width) &&
			   (this.ball.y + this.ball.radius > brick.y));
		},
		ballCollideWithBricks: function(){
			var that = this;
			this.bricksDestroyed = [];
			this.bricks.forEach(function(brick, i){
				//testing if the ball is inside or on the edges of the brick 
				if(that.BallInBrick(brick)){
					//remove the brick
					brick.dead = true;
					that.deadBricks += 1;

					//incrementing the game's speed
					that.ball.speed += 1/5;
					that.pad.speed += 1;

					//changing the ball direction
					that.ball.directionY *= -1;
				}
			});
		},
		ballCollideWithWindow: function(){
			if(this.ball.x - this.ball.radius <= 0 || this.ball.x + this.ball.radius >= this.canvasWidth){
				this.ball.directionX *= -1;
			}
			
			if(this.ball.y - this.ball.radius < 0){
				this.ball.y = this.ball.radius;
				this.ball.directionY *= -1;
			}
			if(this.ball.y + this.ball.radius > this.canvasHeight){
				this.ball.y = this.canvasHeight - this.ball.radius;
				this.ball.directionY = 0;
				this.ball.directionX = 0;
				this.lose();
			}
			
		},
		movePad: function(){
			this.pad.x += this.pad.speed * this.pad.directionX;

			if(this.pad.x < 0){
				this.pad.x = 0;
			}
			if(this.pad.x > (this.canvasWidth - this.pad.width)){
				this.pad.x = this.canvasWidth - this.pad.width;
			}
		},
		lose: function(){
			console.log("YOU LOST");
			clearInterval(this.intervalID);
		}

	};



	// DO NOT MODIFY ANYTHING BELOW THIS LINE
	Game = {
		new: makeNewGame
	};

	Object.defineProperty(Game, "prototype", {
		value: proto,
		writable: false
	});

   return Game;

});