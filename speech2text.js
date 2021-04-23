const {PythonShell} = require('python-shell');

let counter = 0
function capture(){
    console.log('speak for the next 5 seconds...')
    PythonShell.run('speech2text.py', null, function (err, results) {
        // if (err) throw err;
        console.log('Text:', results[1]);
        counter++
        capture()
    });

}


console.log(`running speech2text. system will report text in intervals of 5 seconds`)
capture()

