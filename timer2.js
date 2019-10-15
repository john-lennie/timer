const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0062') {
    process.stdout.write('\x07');
  }
  if (key > 0 && key < 10) {
    console.log('setting timer for', key, 'seconds');
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
});
