/**
* Ball.js - Controls the ball state
* @author  Felipe Carmo
* @version 1.0
*/

define([ "jquery" ],
function($) {

   var Ball, proto, initX, initY;

   /*
   *       Constructors
   */

   function makeNewBall(rad, spd, dircX, dircY, colr, posX, posY) {

      var ball = Object.create(proto);
      ball.radius = rad;
      ball.speed = spd;
      ball.directionX = dircX;
      ball.directionY = dircY;
      ball.color = colr;
      ball.x = posX;
      ball.y = posY;
      initX = posX;
      initY = posY;
      return ball;

   }


   /*
   *       Prototype / Instance methods
   */

   proto = {
      backInicialPosition: function(){

         this.x = initX;
         this.y = initY;

      },
      changeDirectionX: function() {

         this.directionX *= -1;

      },
      changeDirectionY: function() {

         this.directionY *= -1;

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
