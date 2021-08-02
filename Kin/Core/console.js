//document.getElementById('output').value = document.getElementById('console').value;
const Kennel = require("./Kin/Core/Kennel.js");
const os = require('os');
const fs = require('fs');
const { shell } = require('@electron/remote');
const { ipcRenderer } = require('electron');
var minimize = document.getElementById("minimize");

minimize.addEventListener("click", Minimize);

function Minimize() {
  ipcRenderer.send('minimize');
}


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
      document.getElementById('console').value = ' > ';
    }
  
    if (document.getElementById('console').value == '>') {
      document.getElementById('console').value = ' > ';
    }
  
    function submitForm() {
      document.getElementById('output').value = '';
      commands();
      document.getElementById('console').value = ' > ';
    }
}

function commands() {
    var text = document.getElementById('console').value;
    var user = os.userInfo().username;
    
    if (text == ' > cls') {
      document.getElementById('output').value = '';
    }
    else if (text == ' > sparky'){
      shell.openPath(Kennel.sparkyPath);
      sleep(2000)
      var data = fs.readFileSync('C:\\Users\\'+user+'\\AppData\\Local\\Temp\\out.txt', 'utf8');
      document.getElementById('output').value = document.getElementById('console').value+'\n'+data;
    }
    else if (text == ' > help'){
      shell.openExternal('https://github.com/MatthewZenn/Alpha');
      document.getElementById('output').value = document.getElementById('console').value;
    }
    else if (text == ' > theme --light'){
      document.documentElement.setAttribute('data-theme', 'light')
      document.getElementById('output').value = document.getElementById('console').value;
    }
    else if (text == ' > theme --dark'){
      document.documentElement.setAttribute('data-theme', 'dark')
      document.getElementById('output').value = document.getElementById('console').value;
    }
    else if (text == ' > whoami'){
      document.getElementById('output').value = document.getElementById('console').value+'\n'+user;
    }
    else if (text == ' > ls'){
      let filenames = fs.readdirSync(Kennel.kinPath);
      filenames.forEach((file) => {
        document.getElementById('output').value = ("File:", file);
    });
    }
    else if (text == ' > hello there'){
      document.getElementById('output').value = document.getElementById('console').value+'\n'+'General Kenobi!';
    }
    else if (text == ' > hello'){
      document.getElementById('output').value = document.getElementById('console').value+'\n'+'Hi:)';
    }
    else {
      document.getElementById('output').value = document.getElementById('console').value;
    }
}