define(["jquery"],
function($) {

   var Ball, proto;

   /*
   *       Constructors
   */

   function makeNewBall(rad, spd, dirc, colr, posX, posY) {
      var ball = Object.create(proto,{
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
         x:{
            value: posX
         },
         y:{
            value: posY
         }
      });

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