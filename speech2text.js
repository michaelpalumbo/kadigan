const {PythonShell} = require('python-shell');
const fs = require('fs');
let date = new Date().toISOString().
  replace(/T/, '_').      // replace T with a space
  replace(/\..+/, '') 
const sessionName = 'placeholder_text2speech_'+ date
const sessionFile = sessionName + '.txt'
let counter = 0

fs.writeFile(sessionFile, sessionName, (err) => {
    if (err)
      console.log(err);
    else {
      console.log(`Writing text to new text file: ${sessionFile}\n`);
    }
  });

function capture(){
    // console.log('speak for the next 5 seconds...')
    PythonShell.run('speech2text.py', null, function (err, results) {
        // if (err) throw err;
        console.log(newLine(results[1]));
        let text = '\n' + results[1]
        // add to the file
        fs.appendFile(sessionFile, text, (err) => {});
        counter++
        capture()
    });

}


console.log(`running speech2text. system will report text in intervals of 5 seconds`)
capture()
function newLine(str) {
    if(!str){
        // return undefined
    }else {
        var result = '';
        while (str.length > 0) {
          result += str.substring(0, 50) + '\n';
          str = str.substring(50);
        }
        return result;
    }

  }

