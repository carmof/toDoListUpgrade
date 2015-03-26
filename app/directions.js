var Directions, proto;

/*
*       Constructors
*/

function makeNewDirections() {
   var Directions = Object.create(proto,{
      north: {
         enumerable: true,
         configurable: true,
         writeable: true,
         value: 1
      },
      south: {
         enumerable: true,
         configurable: true,
         writeable: true,
         value: 2
      },
      west: {
         enumerable: true,
         configurable: true,
         writeable: true,
         value: 3
      },
      east: {
         enumerable: true,
         configurable: true,
         writeable: true,
         value: 4
      },
      northeast: {
         enumerable: true,
         configurable: true,
         writeable: true,
         value: 5
      },
      northwest: {
         enumerable: true,
         configurable: true,
         writeable: true,
         value: 6
      },
      southwest: {
         enumerable: true,
         configurable: true,
         writeable: true,
         value: 7
      },
      southeast: {
         enumerable: true,
         configurable: true,
         writeable: true,
         value: 8
      }
   })
}


/*
*       Prototype / Instance methods
*/

proto = {
   
};



// DO NOT MODIFY ANYTHING BELOW THIS LINE
Directions = {
new: makeNewBrick
};

Object.defineProperty(Directions, "prototype", {
value: proto,
writable: false
});

module.exports = Directions;