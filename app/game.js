
define(["jquery", "app/ball.js", "app/brick.js", "app/pad.js", "app/canvas.js"],
function($, Ball, Brick, Pad, Canvas) {

	var Game, proto, canvasWidth, canvasHeight, canvasID
	ballRadius = 10,
	ballSpeed = 5,
	padWidth = 150,
	padHeight = 10,
	padRadius = 5,
	padSpeed = 20,
	canvasPadding = 10,
	brickRows = 5,
	brickCols = 9,
	bricksPadding = 5,
	brickHeight = 20,
	brickWidth = 107;
	brickRadius = 5;	


	/*
	*       Constructors
	*/

	function makeNewGame(canvasObj) {
		var padStartX, padStartY;
		var base = Object.create(proto);
		base.canvas = Canvas.new(canvasObj);
		base.stage = canvasObj;
		base.canvasWidth = base.stage.canvas.width;
		base.canvasHeight = base.stage.canvas.height;
		base.padStartX = base.canvasWidth/2 - padWidth/2;
		base.padStartY = base.canvasHeight - padHeight - ballRadius*3;
		base.bricks = [];
		base.ball = null;
		base.pad = null;
		this.prevBall = null;
		base.time = null;
		base.bricksDestroyed = [];
		base.deadBricks = 0;
		base.prevBall = {"x": 0, "y": 0};
		base.prevPad = {"x": 0, "y": 0,"height": 0, "width": 0};
		base.intervalID = null;
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
			this.time = (new Date()).getTime();
			this.intervalID = window.setInterval(function(){that.loop();}, 1000/50);
		},
		initGame: function(){
			var that = this, posX = 10, posY = 10, i = 0, j = 0;
			this.bricks = [];
			this.deadBricks = 0;
			this.pad = Pad.new(padWidth, padHeight, padRadius, padSpeed, 0, "#FFFFFF",  this.padStartX, this.padStartY);
			this.ball = Ball.new(ballRadius, ballSpeed, 0,0, "#FFFFFF", this.padStartX + this.pad.width/2, this.padStartY - ballRadius);//rad, spd, dirc, colr, pos
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
					this.bricks.push( Brick.new(brickWidth, brickHeight, brickRadius, posX, posY, "#00FEAA") );
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
			this.movePad();
			this.pad.directionX = 0;
			this.ballCollisions();
			if(this.deadBricks == this.bricks.length){
				this.win();
			}
			this.canvas.render(this.getState(), this.stage);
		},
		ballCollisions: function(){
			this.ballCollideWithWindow();
			this.ballCollideWithBricks();
			this.ballCollideWithObject(this.pad);
			// this.ballCollideWithObject(this.prevPad);
			this.prevBall.x = this.ball.x;
			this.prevBall.y = this.ball.y;
			this.prevPad.x = this.pad.x;
			this.prevPad.y = this.pad.y;
			this.prevPad.width = this.pad.width;
			this.prevPad.height = this.pad.height;
			this.ball.y -= this.ball.speed * this.ball.directionY;
			this.ball.x -= this.ball.speed * this.ball.directionX;
						
		},
		ballCollideWithObject: function(obj){
			var radius = obj.radius ? obj.radius : 0;
			if(this.ball.x + this.ball.radius >= obj.x - radius &&
			   this.ball.x - this.ball.radius < obj.x + obj.width + radius &&
			   this.ball.y + this.ball.radius >= obj.y &&
			   this.ball.y - this.ball.radius < obj.y + obj.height){

				if(this.prevBall.x + this.ball.radius >= obj.x - radius &&
			   	   this.prevBall.x - this.ball.radius <= obj.x + obj.width + radius){
			   	   	//if it hit the top part of the pad
					this.ball.directionY *= -1;
				}else{
					//if it hit the sides of the pad
					this.ball.directionX *= -1;
					// clearInterval(this.intervalID);
				}
				return true;
			}
			return false;
		},
		ballCollideWithBricks: function(){
			var that = this;
			this.bricksDestroyed = [];
			this.bricks.forEach(function(brick, i){
				//testing if the ball is inside or on the edges of the brick 
				if(!brick.dead && that.ballCollideWithObject(brick)){
					//remove the brick
					brick.dead = true;
					that.deadBricks += 1;

					//incrementing the game's speed
					that.ball.speed += 1/5;
					that.pad.speed += 1;
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
			var end = (new Date).getTime(),
			totalTime = Math.round((end - this.time) / 1000);
			console.log("YOU LOST - points: " + this.deadBricks + " in " + totalTime + "s");
			clearInterval(this.intervalID);
			this.startGame();
		},
		win: function(){
			var end = (new Date).getTime(),
			totalTime = Math.round((end - this.time) / 1000);
			console.log("YOU WON - points: " + this.deadBricks + " in " + totalTime + "s");
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