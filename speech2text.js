const {PythonShell} = require('python-shell');

const numIntervals = process.argv[2]
let counter = 0
function capture(){
    
    if(counter == numIntervals){
        process.exit()
    }
    console.log('speak for the next 5 seconds...')
    PythonShell.run('speech2text.py', null, function (err, results) {
        // if (err) throw err;
        console.log('finished', results);
        counter++
        capture()
    });

}
let runLength = numIntervals * 5
if(!process.argv[2]){
    console.log('error. must specify number of intervals to capture. \nexample:\n\nnpm start 4\nNote, each interval is 5 seconds long.')
    process.exit()
} else {
    console.log(`running speech2text, will report text every 5 seconds for the next ${runLength}`)
    capture()
}
