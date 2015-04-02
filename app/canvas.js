define(["jquery", "easelJS"],
function($) {

   var Canvas, proto;

   /*
   *       Constructors
   */

   function makeNewCanvas(varCanvas, varContext) {
      var base = Object.create(proto,{
         canvas: {
            enumerable: true,
            configurable: true,
            writeable: true,
            value: varCanvas
         },
         context: {
            value : varContext
         }
      });

      return base;
   }


   /*
   *       Prototype / Instance methods
   */

   proto = {
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