define(["jquery"],
function($) {
	var Pad, proto;

	/*
	*       Constructors
	*/

	function makeNewPad(dh, hgt, rad, spd, dirc, colr, pos) {
	   var pad = Object.create(proto,{
	   	width: {
	         enumerable: true,
	         configurable: true,
	         writeable: true,
	         value: wdh
	      },
	      hight: {
	         value : hgt
	      },
	      radius: {
	         enumerable: true,
	         configurable: true,
	         writeable: true,
	         value: rad
	      },
	      speed: {
	         value : spd
	      },
	      direction: {
	         value: dirc
	      },
	      color:{
	         value: colr
	      },
	      position:{
	         value : {"x": pos.x, "y": pos.y}
	      }
	   });
	}


	/*
	*       Prototype / Instance methods
	*/

	proto = {
	   setSpeed: function(newSpeed){
	      this.speed = newSpeed;
	   },
	   setColor: function(newColor){
	      this.color = newColor;
	   },
	   setSpeed: function(newSpeed){
	      this.speed = newSpeed;
	   },
	   reset: function(){
	      this
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