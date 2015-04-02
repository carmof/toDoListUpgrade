define(["jquery"],
function($) {

	var Brick, proto;

	/*
	*       Constructors
	*/

	function makeNewBrick (wdh, hgt, posX, posY, colr) {
	   var brick = Object.create(proto,{
		      width: {
		         enumerable: true,
		         configurable: true,
		         writeable: true,
		         value: wdh
		      },
		      height: {
		         value : hgt
		      },
		      x:{
		         value : posX
		      },
		      y:{
		      	value : posY
		      },
		      color:{
		         value: colr
		      }
		});
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