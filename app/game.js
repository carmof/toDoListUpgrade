
define(["jquery", "app/ball.js", "app/brick.js", "app/pad.js", "app/canvas.js"],
function($, Ball, Brick, Pad, Canvas) {

	var Game, proto, canvasWidth, canvasHeight, canvasID
	brickWidth = 50, brickHeight = 20, ballRadius = 9,
	padWidth = 150, padHeight = 40, padRadius = 5;

	/*
	*       Constructors
	*/

	function makeNewGame(cnvsId) {
		canvasID = cnvsId;
		var base = Object.create(proto);
		base.canvas = null;
		base.bricks = [];
		base.ball = null;
		base.pad = null;
		base.time = null;
		return base;
	}


	/*
	*       Prototype / Instance methods
	*/

	proto = {
		startGame: function(){
			var brick = Brick.new(brickWidth, brickHeight, {"x": 100, "y": 100}, "rgb(0,0,0)");
			this.canvas = Canvas.new($("#" + canvasID)[0], $("#" + canvasID)[0].getContext("2d"));
			console.log(this.canvas);
			this.canvas.drawObject(brick);
			this.loop();

		},
		drawBall: function(){

		},
		positionBricks: function(numRows, numCol){
			var brick = Brick.new(brickWidth, brickHeight, {"x": 100, "y": 100}, "rgb(0,0,0)");
			this.drawBrick(brick);
		},
		drawBrick: function(brick){
			this.context.fillStyle = brick.color;
        	this.context.fillRect(brick.position.x, brick.position.y, brick.width, brick.height);
		},
		drawPad: function(){

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