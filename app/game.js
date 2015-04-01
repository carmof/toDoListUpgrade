
define(["jquery", "app/ball.js", "app/brick.js", "app/pad.js"],
function($, Ball, Brick, Pad) {

	var Game, proto, canvasWidth, canvasHeight;

	/*
	*       Constructors
	*/

	function makeNewGame(canvasId, canvasHgt, canvasWth) {
		var base = Object.create(proto, {
			canvas: {
		        enumerable: true,
		        configurable: true,
		        writeable: true,
		        value: $("#" + canvasId)[0]
		    },
			context: {
		        enumerable: true,
		        configurable: true,
		        writeable: true,
		        value: $("#" + canvasId)[0].getContext("2d")
		    },
		    bricks: {
		    	value: null
		    },
		    ball: {
		    	value: null
		    },
		    pad:{
		    	value: null
		    },
		    time:{
		    	value: null
		    }
		});
		return base;
	}


	/*
	*       Prototype / Instance methods
	*/

	proto = {
		startGame: function(){
			this.loop();
		},
		drawBall: function(){

		},
		drawBrick: function(){

		},
		drawPad: function(){

		},
		loop: function(){
			console.log(this.canvas);
			console.log(this.context);
			this.context.fillStyle = "rgb(200,0,0)";
        	this.context.fillRect (10, 10, 55, 50);

	        this.context.fillStyle = "rgba(0, 0, 200, 0.5)";
	        this.context.fillRect (30, 30, 55, 50)
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