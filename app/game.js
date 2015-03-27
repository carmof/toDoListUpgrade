
define(["jquery"],
function($) {

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
		    }
		});
		return base;
	}


	/*
	*       Prototype / Instance methods
	*/

	proto = {
		clearCanvas: function(){
			this.context.clearRect(0,0,canvasWidth,canvasHeight);
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