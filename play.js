const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const random = connect(); 

setupInput(random);

module.exports = setupInput;





