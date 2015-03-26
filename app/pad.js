var Pad, proto;

/*
*       Constructors
*/

function makeNewPad() {
   var pad = Object.create(proto);
   return pad;
}


/*
*       Prototype / Instance methods
*/

proto = {
   
};



// DO NOT MODIFY ANYTHING BELOW THIS LINE
Pad = {
new: makeNewPad
};

Object.defineProperty(Pad, "prototype", {
value: proto,
writable: false
});

module.exports = Pad;