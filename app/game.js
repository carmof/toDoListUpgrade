
var Game, proto;

/*
*       Constructors
*/

function makeNewGame() {
	var hist = Object.create(proto);
	hist.list = DLList.new();
	hist.current = null;
	return hist;
}


/*
*       Prototype / Instance methods
*/

proto = {
   
};



// DO NOT MODIFY ANYTHING BELOW THIS LINE
Game = {
new: makeNewGame
};

Object.defineProperty(Game, "prototype", {
value: proto,
writable: false
});

module.exports = Game;