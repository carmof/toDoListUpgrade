define(["jquery"],
function($) {

   var Ball, proto;

   /*
   *       Constructors
   */

   function makeNewBall(rad, spd, dirc, colr, posX, posY) {
      var ball = Object.create(proto);
      ball.radius = rad;
      ball.speed = spd;
      ball.direction = dirc;
      ball.color = colr;
      ball.x = posX;
      ball.y = posY;
      return ball;
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

   return Ball;

});