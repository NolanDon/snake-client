const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.15.225',
    port: '50541'
  });
 conn.on('data', (data) => {
  console.log('you ded cuz you idled')
});
  conn.on('connect', (data) => {
    conn.write('Name: NOL');
    console.log('Successfully connected to game server')
  })
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
};

module.exports = {
  connect
};