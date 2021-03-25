const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// // on is onclick listner
// readStream.on('data',(chunk) => {
//     console.log('new chunk');
//     // console.log(chunk.toString());
//     console.log(chunk);
//     // creates a new file.
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write(chunk);
// })

// piping
readStream.pipe(writeStream);