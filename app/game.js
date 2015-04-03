
define(["jquery", "app/ball.js", "app/brick.js", "app/pad.js", "app/canvas.js"],
function($, Ball, Brick, Pad, Canvas) {

	var Game, proto, canvasWidth, canvasHeight, canvasID
	brickRows = 5,
	brickCols = 10,
	ballRadius = 9,
	padWidth = 150,
	padHeight = 50,
	padRadius = 5,
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
		base.ball = Ball.new(ballRadius, 0, 0, "#(000000)", base.canvasWidth/2, base.canvasHeight - 70);//rad, spd, dirc, colr, pos
		base.pad = Pad.new(padWidth, padHeight, padRadius, 0, 0, "#(111111)",  base.canvasWidth/2 - padWidth/2, base.canvasHeight - 70 + ballRadius);
		base.time = null;
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
			var intervalID = window.setInterval(function(){that.loop();}, 1000/30);
		},
		initGame: function(){
			var that = this, posX = 10, posY = 10, i = 0, j = 0;
			//adding listener to windows
			window.addEventListener('keydown', function (evt) {
			    switch (evt.keyCode) {
			        // Left arrow
			        case 37:
			        	that.pad.speed += -6;
			            break;
			        // Right arrow   
			        case 39:
			            that.pad.speed += 10;
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
		},
		getState: function(){
			return {
				"ball": this.ball,
				"pad": this.pad,
				"bricks": this.bricks
			};

		},
		positionBricks: function(numRows, numCol){
			var brick = Brick.new(brickWidth, brickHeight, {"x": 100, "y": 100}, "rgb(0,0,0)");
			this.drawBrick(brick);
		},

		loop: function(){
			this.movePad();
			this.canvas.render(this.getState(), this.stage);
		},
		movePad: function(){
			this.pad.x += this.pad.speed;
			if(this.pad.x < 0){
				this.pad.x = 0;
			}
			if(this.pad.x > (this.canvasWidth - this.pad.width)){
				this.pad.x = this.canvasWidth - this.pad.width;
			}
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