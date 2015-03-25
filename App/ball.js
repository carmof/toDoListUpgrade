var Ball, proto;

/*
*       Constructors
*/

function makeNewBall() {
   var ball = Object.create(proto,{
      position: {
         enumerable: true,
         configurable: true,
         writeable: true,
         value: {x: null,y: null}
      },
      radius: {
         enumerable: true,
         configurable: true,
         writeable: true,
         value: null
      },
      speed: {
         enumerable: true,
         configurable: true,
         writeable: true,
         value: 1
      },
      direction: {
         enumerable: true,
         configurable: true,
         writeable: true,
         value: Northeast
      }
   });

   return ball;
}


/*
*       Prototype / Instance methods
*/

proto = {
   reset: function(){

   },
   collideWall: function(){

   },
   collidePad: function(){

   },
   collideBrick: function(){
      
   }
   
};



// DO NOT MODIFY ANYTHING BELOW THIS LINE
Ball = {
new: makeNewBall
};

Object.defineProperty(Ball, "prototype", {
value: proto,
writable: false
});

module.exports = Ball;