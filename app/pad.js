/**
* Pad.js - Controls the pad state
* @author  Felipe Carmo
* @version 1.0
*/

define([ "jquery" ],
function($) {

	var Pad, proto;

	/*
	*       Constructors
	*/

	function makeNewPad(wdh, hgt, rad, spd, dirc, colr, posX, posY) {

		var pad = Object.create(proto);
		pad.width = wdh;
		pad.height = hgt;
		pad.radius = rad;
		pad.speed = spd;
		pad.direction = dirc;
		pad.color = colr;
		pad.x = posX;
		pad.y = posY;
		pad.directionX = 0;
		return pad;

	}


	/*
	*       Prototype / Instance methods
	*/

	proto = {

		changeDirection: function(dir){

			if
				(dir === undefined){

				this.directionX *= -1;

			}else {

				this.directionX = dir;

			}

		}

	};


	// DO NOT MODIFY ANYTHING BELOW THIS LINE
	Pad = {

		new: makeNewPad

	};

	Object.defineProperty(Pad, "prototype", {
		value: proto,
		writable: false
	});

	return Pad;

});
