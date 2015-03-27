// Main file that loads things up.
// Called from require.js

require.config({
   // baseUrl is automatically set to the directory where this main.js file is.
   // Or we can set it in this config:
   baseUrl: "app",
   // This way one can call on jquery and libs directly
   paths: {
      "lib": "../lib",
      "jquery": "../lib/jquery",
      "handlebars": "../lib/handlebars-v3.0.0"
      // or the following to load remotely:
      // "jquery": "https://code.jquery.com/jquery-2.1.3.min"
   },
   waitSeconds: 15
});

// All other modules should be called through here
require(["jquery", "handlebars", "app/game.js"],
function($, handleBars, Game) {
   // mixin
   $(function() {
      console.log("Page loaded!");
      var a = Game.new("backgroundCanvas", 500, 500);
   });
   console.log("Other things here");
   
});