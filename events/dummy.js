// http://howtonode.org/demystifying-events-in-node

// basic imports
var events = require('events');

function Dummy() {
    events.EventEmitter.call(this);
}

// inherit events.EventEmitter
Dummy.super_ = events.EventEmitter;
Dummy.prototype = Object.create(events.EventEmitter.prototype, {
    constructor: {
        value: Dummy,
        enumerable: false
    }
});


Dummy.prototype.cook = function (chicken, callback)  {  
	console.log("cook()")
	callback(chicken);
}


Dummy.prototype.cooking = function(chicken) {
    var self = this;
    self.chicken = chicken;
    //self.cook = Dummy.prototype.cook; // assume dummy function that'll do the cooking
    self.cook(chicken, function(cooked_chicken) {
        self.chicken = cooked_chicken
		console.log("before emit cooked event")
        self.emit('cooked', self.chicken);
    });

    return self;
}

// for us to do a require later
module.exports = Dummy;
