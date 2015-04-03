define(["jquery", "easelJS"],
function($) {

   var Canvas, proto;

   /*
   *       Constructors
   */

   function makeNewCanvas() {
      var base = Object.create(proto);
      base.ball = null;
      base.pad = null;
      base.bricks = [];

      return base;
   }


   /*
   *       Prototype / Instance methods
   */
   proto = {
      start: function(data, stage){
         var that = this;
         data.bricks.forEach(function(brick){
            that.bricks.push(that.drawObject(brick, stage));
         });

         this.ball = this.drawBall(data.ball, stage);
         // xxx.MoveTo(0,0);
         this.pad = this.drawObject(data.pad, stage);
         stage.update();

      },
      render: function(data, stage){
         this.pad.x = data.pad.speed;
         stage.update();
      },
      drawObject: function(object, stage){
         var obj, radius;
         obj = new createjs.Shape();
         radius = object.radius ? object.radius : 5;
         obj.graphics.beginFill(object.color).drawRoundRect(object.x, object.y, object.width, object.height, 5);
         stage.addChild(obj);
         return obj;
      },
      drawBall: function(ball, stage){
         var circle = new createjs.Shape();
         circle.graphics.beginFill(ball.color).drawCircle(ball.x, ball.y, ball.radius);
         stage.addChild(circle);
         return circle;
      },
      clearObject: function(object){
      },
      moveObject: function(object){
      },
      reset: function(){
      }
   };



   // DO NOT MODIFY ANYTHING BELOW THIS LINE
   Canvas = {
      new: makeNewCanvas
   };

   Object.defineProperty(Canvas, "prototype", {
      value: proto,
      writable: false
   });

   return Canvas;

});