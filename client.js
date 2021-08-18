const net = require('net');
const {IP, PORT, INITIALS} = require('./constants');

// Connecting to the Server
const connect = function() {

  const conn = net.createConnection({
    host: IP,
    port: PORT

  });

  conn.setEncoding('utf8');

  //Displaying data from Server if received (in this case when idle)
  conn.on('data', (data) => {

    console.log(data);

  });

  // On connection will display message and send Initials to server
  conn.on('connect', () => {

    console.log('Successfully connected to game server');
    conn.write('Name: ' + INITIALS);

  });

  return conn;
};

module.exports.connect = connect;