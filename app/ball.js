var Ball, proto;

/*
*       Constructors
*/

function makeNewBall(ballID) {
   var ball = Object.create(proto,{
      object: {
         enumerable: true,
         configurable: true,
         writeable: true,
         value: $(ballID)[0]
      },
      speed: {

      },
      direction: {
         
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