const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('say hello', () => console.log('hello eventEmitter'));

setTimeout(() => eventEmitter.emit('say hello'), 3000);
