const fs = require('fs')

// Reading Files

// first argument is the absolute path and 2nd argument isfunction and it works whent it is complete
// fs.readFile('./docs/blog1.txt', (err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// if we run this file hello world gets printed 1st because readfile is async functions so it loads late 
// console.log('hello world');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Writing Files

// 1st argument is absolute path 2nd argument is the text that should be replaced and third is the callback function
// fs.writeFile('./docs/blog1.txt', 'hey king welcome', () => {
//     console.log('file has been rewritten');
// });
// fs.writeFile('./docs/blog2.txt', 'hey king welcome', () => {
//     console.log('file has been rewritten');
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Directories

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created');
//     })
// }else{
//     fs.rmdir('./assets', (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }

// Deleting files 

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}