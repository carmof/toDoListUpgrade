define(["jquery"],
function($) {

	var Brick, proto, ID = 1;

	/*
	*       Constructors
	*/

	function makeNewBrick (wdh, hgt, posX, posY, colr) {

		var brick = Object.create(proto);
		brick.id = ID;
		brick.width = wdh;
		brick.height = hgt;
		brick.x = posX;
		brick.y = posY;
		brick.color = colr;
		ID += 1;
		brick.dead = false;
	    return brick;
	}

	   


	/*
	*       Prototype / Instance methods
	*/

	proto = {

	};



	// DO NOT MODIFY ANYTHING BELOW THIS LINE
	Brick = {
		new: makeNewBrick
	};

	Object.defineProperty(Brick, "prototype", {
		value: proto,
		writable: false
	});

	return Brick;
});