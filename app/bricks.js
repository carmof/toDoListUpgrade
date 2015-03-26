var Brick, proto;

/*
*       Constructors
*/

function makeNewBrick() {
   var game = Object.create(proto);
   return game;
}


/*
*       Prototype / Instance methods
*/

proto = {
   
};



// DO NOT MODIFY ANYTHING BELOW THIS LINE
Brick = {
new: makeNewBrick
};

Object.defineProperty(Brick, "prototype", {
value: proto,
writable: false
});

module.exports = Brick;