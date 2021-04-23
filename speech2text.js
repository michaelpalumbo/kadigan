const {PythonShell} = require('python-shell');

console.log('speak for the next 5 seconds...')
PythonShell.run('speech2text.py', null, function (err, results) {
    if (err) throw err;
    console.log('finished', results);
  });