/**  
* Brick.js - Controls the brick state
* @author  Felipe Carmo
* @version 1.0
*/

define(["jquery"],
function($) {

	var Brick, proto, ID = 0;

	/*
	*       Constructors
	*/

	function makeNewBrick (wdh, hgt, rad, posX, posY, colr) {

		var brick = Object.create(proto);
		brick.id = ID;
		brick.width = wdh;
		brick.height = hgt;
		brick.radius = rad;
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
	function resetId(){
		ID = 0;
	}
	proto = {

	};



	// DO NOT MODIFY ANYTHING BELOW THIS LINE
	Brick = {
		new: makeNewBrick,
		reset: resetId
	};

	Object.defineProperty(Brick, "prototype", {
		value: proto,
		writable: false
	});

	return Brick;
});