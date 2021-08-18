// File to connect and run game

const { connect } = require('./client');
const { setupInput } = require('./input');


console.log('Connecting... ');



setupInput(connect());