var Brick, proto;

/*
*       Constructors
*/

function makeNewBrick(height, width, color) {
   var brick = Object.create(proto,{
      object: {
         enumerable: true,
         configurable: true,
         writeable: true,
         value: document.createElementNS("http://www.w3.org/2000/svg", "rect");
      }
   }
   brick.object.setAttribute("width", height);
   brick.object.setAttribute("height", width);
   brick.object.setAttribute("fill", color);
   return brick;
   );


/*
*       Prototype / Instance methods
*/

proto = {
   drawOnScreen: function(x, y){

   }
};



// DO NOT MODIFY ANYTHING BELOW THIS LINE
Brick = {
new: makeNewBrick
};

Object.defineProperty(Brick, "prototype", {
value: proto,
writable: false
});

module.exports = Brick;