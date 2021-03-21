//keep our code modular and reuse the code modularity
// require in node is like import statement in react

// const xyx = require('./people');

// hello is the value for xyx
// console.log(xyx.people, xyx.ages);


///////////////////////////////////////////////////////////////////////

// const {ages, people} = require('./people');

// console.log(ages, people);

///////////////////////////////////////////////////////////////////////

const os = require('os')

console.log(os.platform(), os.homedir());