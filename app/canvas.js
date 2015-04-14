/**
* Canvas.js - Responsible for the view part of the project, by updating the window.
* @author  Felipe Carmo
* @version 1.0
* @see Game
*/

define([ "jquery", "easelJS", "preLoad" ],

function($) {

   var Canvas, proto;

   /*
   *       Constructors
   */

   function makeNewCanvas(canvas) {

      var base = Object.create(proto);
      base.bitmap = new createjs.Bitmap("css/img/background.jpg");
      base.stage = canvas;
      base.ball = null;
      base.pad = null;
      base.bricks = [];
      base.score = new createjs.Text();
      return base;

   }


   /*
   *       Prototype / Instance methods
   */
   proto = {

      start: function(data){

         var that = this;
         this.stage.clear();
         this.bricks = [];
         text = new createjs.Text();
         this.stage.addChild(this.bitmap); // adding
         this.score.text = "SCORE: ";
         this.score.x = 10;
         this.score.y = 5;
         this.score.font = "26px Helvetica";
         this.score.color = "#66FFFF";
         this.stage.addChild(this.score); // adding score to canvas image
         data.bricks.forEach(function(brick){

            that.bricks[ brick.id ] = that.drawObject(brick);

         });

         this.ball = this.drawBall(data.ball);
         this.pad = this.drawObject(data.pad);
         window.setTimeout(function(){

            that.render(data);

         }, 100);

      },
      render: function(data) {

         var that = this;
         this.pad.x = data.pad.x;
         this.ball.x = data.ball.x;
         this.ball.y = data.ball.y;
         this.score.text = "SCORE: " + data.score;
         data.bricks.forEach(function(brick){

            if (brick.dead){

               that.bricks[ brick.id ].x = -100;
               that.bricks[ brick.id ].y = -100;

            }

         });

         this.stage.update();

      },
      drawObject: function(object) {

         var obj, radius;
         obj = new createjs.Shape();
         radius = object.radius ? object.radius : 5;
         obj.graphics.beginFill(object.color).drawRoundRect(0, 0, object.width, object.height, radius);
         obj.x = object.x;
         obj.y = object.y;
         this.stage.addChild(obj);
         return obj;

      },
      drawBall: function(ball) {

         var circle = new createjs.Shape();
         circle.graphics.beginFill(ball.color).drawCircle(0, 0, ball.radius);
         circle.x = ball.x;
         circle.y = ball.y;
         this.stage.addChild(circle);
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
