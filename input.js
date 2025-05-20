const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  readline.question('', arr => {
    readline.question('', k => {
      n = parseInt(n);
      arr = arr.split(' ').map(Number);
      k = parseInt(k); console.log(n, arr, k);
      readline.close();
    });
  });
});


// process.stdin.on('data', function (chunk) {
//   console.log(`Received data: ${chunk}`);
// });
// process.stdin.on('end', function () {
//   console.log('End of input stream');
// });
// process.stdin.on('error', function (err) {cle
//   console.error('Error reading from stdin:', err);
// });

