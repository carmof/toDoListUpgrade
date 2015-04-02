define(["jquery", "easelJS"],
function($) {

   var Canvas, proto;

   /*
   *       Constructors
   */

   function makeNewCanvas() {
      var base = Object.create(proto);
      return base;
   }


   /*
   *       Prototype / Instance methods
   */

   proto = {
      render: function(data, stage){
         var that = this;
         data.bricks.forEach(function(brick){
            that.drawBrick(brick, stage);
         });
         stage.update();

      },
      drawBrick: function(brick, stage){
         var rec = new createjs.Shape();
         rec.graphics.beginFill(brick.color).drawRoundRect (brick.x, brick.y, brick.width, brick.height, 5);
         stage.addChild(rec);
      },
      drawObject: function(object){
         this.context.fillStyle = object.color;
         this.context.fillRect(object.position.x, object.position.y, object.width, object.height);
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