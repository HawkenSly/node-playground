const EventEmitter = require('events');
//creates EventEmitter variable and includes the inbuilt 'events' module
//to include a local module, use
//require('abc');
//and it will look for abc.js
const celebrity = new EventEmitter();
//creates a new EventEmitter variable called 'celebrity'
let value1 = 0;
let value2 = 0;

// Subscribe to celebrity for Obserser 1
celebrity.on('race', (result) => {
    if (result === 'win') value1++;
    if (result === 'loss') value2++;
});
//used to be
// celebrity.on('race win', () => {
// });

// Subscribe to celebrity for Obserser 2
// celebrity.on('race', (result) => {
// });

process.on('exit', (code) => {
    console.log(`Number of wins: ${value1} 
Number of losses: ${value2}
Process exit event with code: `, code);
});
//exit happens as the program finishes running

celebrity.emit('race', 'win');
celebrity.emit('race', 'loss');
celebrity.emit('race', 'win');


