var Brick, proto;

/*
*       Constructors
*/

function makeNewBrick (wdh, hgt, pos, colr) {
   var brick = Object.create(proto,{
      width: {
         enumerable: true,
         configurable: true,
         writeable: true,
         value: wdh
      },
      hight: {
         value : hgt
      },
      position:{
         value : {"x": pos.x, "y": pos.y}
      },
      color:{
         value: colr
      }
   });

   return brick;


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

module.export = Brick;