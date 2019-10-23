  const net = require('net');
  const { IP, PORT } = require('./constants');
  const connect = function() {
  const conn = net.createConnection({ 
  host: IP,
  port: PORT
  });
  conn.on('connect', (data) => {
    conn.write("Move: up");
  })
  conn.on('data', (data) => {
    console.log('You died, from idling')
  });
  conn.on('connect', (data) => {
    conn.write('Name: aaa');
    console.log('Successfully connected to game server')
  })
  conn.setEncoding('utf8'); 
  return conn;
};

module.exports = { connect };