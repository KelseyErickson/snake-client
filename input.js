const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MESSAGES} = require('./constants');

let connection;

// Function to take in input from user
const setupInput = function (conn) {
  connection = conn;
 
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // Use handleUserInput as callback function so user input is recognized and then sent to server
  stdin.on('data', handleUserInput);

  return stdin;


}

// Function to give user input to the server
const handleUserInput = (key) => {
  
  if (key === '\u0003') {
    process.exit();
  }

  if(key == MOVE_UP_KEY){
    connection.write('Move: up');
  }

  if(key === MOVE_DOWN_KEY){
    connection.write('Move: down');
  }

  if(key === MOVE_LEFT_KEY){
    connection.write('Move: left');
  }

  if(key === MOVE_RIGHT_KEY){
    connection.write('Move: right');
  }

  for(messageKey in MESSAGES){
    if(messageKey === key){
      connection.write(MESSAGES[messageKey]);
    }
  }

};


module.exports.setupInput = setupInput;