//document.getElementById('output').value = document.getElementById('console').value;
const Kennel = require("./Kin/Core/Kennel.js");

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
    
    if (text == '> cls') {
      document.getElementById('output').value = '';
    }
    else if (text == '> sparky'){
      document.getElementById('output').value = document.getElementById('console').value +"\nLoading Sparky...";
      shell.openPath(Kennel.sparkyPath);
      sleep(5000)
      shell.openPath('C:\\Users\\spygu\\AppData\\Local\\Temp\\out.txt');
    }
    else {
      document.getElementById('output').value = document.getElementById('console').value;
    }
}