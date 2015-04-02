
define(["jquery", "app/ball.js", "app/brick.js", "app/pad.js", "app/canvas.js"],
function($, Ball, Brick, Pad, Canvas) {

	var Game, proto, canvasWidth, canvasHeight, canvasID
	brickRows = 5,
	brickCols = 10,
	ballRadius = 9,
	padWidth = 150,
	padHeight = 40,
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
		base.bricks = [];
		base.ball = Ball.new(ballRadius, 1, 0, "#(FFFFFF)", {"x": 100, "y": 100});
		base.pad = null;
		base.time = null;
		return base;
	}


	/*
	*       Prototype / Instance methods
	*/

	proto = {
		startGame: function(){
			this.initGame();
			this.canvas.render(this.getState(), this.stage);
		},
		initGame: function(){
			//setting all bricks
			var posX = 10, posY = 10, i = 0, j = 0;
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
		// drawBrick: function(brick){
		// 	this.context.fillStyle = brick.color;
  //       	this.context.fillRect(brick.position.x, brick.position.y, brick.width, brick.height);
		// },
		drawPad: function(){

		},
		render: function(){

		},
		loop: function(){
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