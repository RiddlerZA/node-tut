// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { user1, user2 } = require('./04-names');
const sayHi = require('./05-utils');
const shakeandbake = require('./06-alternative-flavor');
require('./07-mind-grenade')
sayHi('susan');
sayHi(user1);
sayHi(user2);
