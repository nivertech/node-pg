// A nonsensical node.js program

var Dummy = require('./dummy');

var dinner = new Dummy();
dinner.on('cooked', function(chicken) {
    // eat up!
    console.log("on cooked event!");
    console.log(chicken);
});

var chicken = {};
dinner.cooking(chicken);


