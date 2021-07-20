//document.getElementById('output').value = document.getElementById('console').value;
const Kennel = require("./Kin/Core/Kennel.js");
const os = require('os');
const fs = require('fs');
const { shell } = require('@electron/remote');

var sleep = function (ms) {
  let now = Date.now(), end = now + ms;
  while (now < end) { now = Date.now(); }
};

function press(event) {
    if (event.keyCode == 13 && !event.shiftKey) {
        event.preventDefault(); 
        submitForm();
        return true;
    }
  
    if (document.getElementById('console').value == '') {
      document.getElementById('console').value = '> ';
    }
  
    if (document.getElementById('console').value == '>') {
      document.getElementById('console').value = '> ';
    }
  
    function submitForm() {
      document.getElementById('output').value = '';
      commands();
      document.getElementById('console').value = '> ';
    }
}

function commands() {
    var text = document.getElementById('console').value;
    var user = os.userInfo().username;
    
    if (text == '> cls') {
      document.getElementById('output').value = '';
    }
    else if (text == '> sparky'){
      shell.openPath(Kennel.sparkyPath);
      sleep(2000)
      var data = fs.readFileSync('C:\\Users\\'+user+'\\AppData\\Local\\Temp\\out.txt', 'utf8');
      document.getElementById('output').value = data;
    }
    else if (text == '> help'){
      shell.openExternal('https://github.com/MatthewZenn/Alpha');
      document.getElementById('output').value = document.getElementById('console').value;
    }
    else {
      document.getElementById('output').value = document.getElementById('console').value;
    }
}