/**
* Canvas.js - Responsible for the view part of the project, by updating the window.
* @author  Felipe Carmo
* @version 1.0
* @see Game
*/

define([ "jquery", "easelJS" ],

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
      base.bitmap = new createjs.Bitmap("css/img/background.jpg");
      return base;

   }


   /*
   *       Prototype / Instance methods
   */
   proto = {

      start: function(data, stage){

         var that = this, text;
         stage.clear();
         this.bricks = [];
         text = new createjs.Text();
         text.set({

                text: "SCORE: ",
                textAlign: "center" ,
                x: 100,
                y: 200,
                font: "bold 36px Arial",
                color: "#FFFFFF"

            });

         stage.addChild(this.bitmap);
         stage.addChild(text);
         data.bricks.forEach(function(brick){

            that.bricks[ brick.id ] = that.drawObject(brick, stage);

         });

         this.ball = this.drawBall(data.ball, stage);
         this.pad = this.drawObject(data.pad, stage);
         stage.update();

      },
      render: function(data, stage) {

         var that = this;
         this.pad.x = data.pad.x;
         this.ball.x = data.ball.x;
         this.ball.y = data.ball.y;
         data.bricks.forEach(function(brick){

            if (brick.dead){

               that.bricks[ brick.id ].x = -100;
               that.bricks[ brick.id ].y = -100;

            }

         });
         stage.update();

      },
      drawObject: function(object, stage) {

         var obj, radius;
         obj = new createjs.Shape();
         radius = object.radius ? object.radius : 5;
         obj.graphics.beginFill(object.color).drawRoundRect(0, 0, object.width, object.height, radius);
         obj.x = object.x;
         obj.y = object.y;
         stage.addChild(obj);
         return obj;

      },
      drawBall: function(ball, stage) {

         var circle = new createjs.Shape();
         circle.graphics.beginFill(ball.color).drawCircle(0, 0, ball.radius);
         circle.x = ball.x;
         circle.y = ball.y;
         stage.addChild(circle);
         return circle;

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
