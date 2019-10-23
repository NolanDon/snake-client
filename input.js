let connection;
const handleUserInput = function(key){
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up");
    connection.write('Say: going up')
  } else if (key === 'a') {
    connection.write("Move: left");
    connection.write('Say: going left')
  } else if (key === 's') {
    connection.write("Move: down");
    connection.write('Say: going down')
  } else if (key === 'd') {
    connection.write("Move: right");
    connection.write('Say: going right')
  }
}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  
  return stdin;
}




module.exports = { setupInput }



