var Pad, proto;

/*
*       Constructors
*/

function makeNewPad(padID) {
   var pad = Object.create(proto,,{
      object: {
         enumerable: true,
         configurable: true,
         writeable: true,
         value: $(padID)[0]
      },
      speed: {
      	
      }
   });
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