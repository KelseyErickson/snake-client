let connection;


const setupInput = function (conn) {
  connection = conn;
 

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;


}

const handleUserInput = (key) => {

  if (key === '\u0003') {
    process.exit();
  }

  if(key === 'w'){
    connection.write('Move: up')
  }

  if(key === 's'){
    connection.write('Move: down')
  }

  if(key === 'a'){
    connection.write('Move: left')
  }

  if(key === 'd'){
    connection.write('Move: right')
  }

  if(key === 'g'){
    connection.write('Say: Good Job!')
  }

  if(key === 'h'){
    connection.write('Say: How Dare You!')
  }

  if(key === 'n'){
    connection.write('Say: That\'s Not Fair!')
  }

  if(key === 'b'){
    connection.write('Say: Boo!')
  }

  if(key === 'i'){
    connection.write('Say: I win!')
  }

}


module.exports.setupInput = setupInput;