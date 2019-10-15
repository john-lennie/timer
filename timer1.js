let userInputs = process.argv.slice(2);

userInputs.forEach((item) => {
  if (isNaN(Number(item)) || Number(item) < 0 || userInputs.length < 1) {
    return;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, Number(item) * 1000);
});
