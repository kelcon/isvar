var isvar = require('../index.js');

var test = {
	please: {
		find: {
			this: [{ nice: 'value'}]
		}
	}
};

console.log(test);

// this is implemented

console.log(isvar(test, 'please.find'));

// this is not implemeted

console.log(isvar(test, 'please.find.this[0].nice'));