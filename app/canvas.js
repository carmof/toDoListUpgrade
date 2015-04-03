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
         this.pad = this.drawObject(data.pad, stage);
         stage.update();

      },
      render: function(data, stage){
         this.pad.x = data.pad.x;
         this.ball.x = data.ball.x;
         this.ball.y = data.ball.y;
         stage.update();
      },
      drawObject: function(object, stage){
         var obj, radius;
         obj = new createjs.Shape();
         radius = object.radius ? object.radius : 5;
         obj.graphics.beginFill(object.color).drawRoundRect(0, 0, object.width, object.height, 5);
         obj.x = object.x;
         obj.y = object.y;
         stage.addChild(obj);
         return obj;
      },
      drawBall: function(ball, stage){
         var circle = new createjs.Shape();
         circle.graphics.beginFill(ball.color).drawCircle( 0, 0, ball.radius);
         circle.x = ball.x;
         circle.y = ball.y;
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