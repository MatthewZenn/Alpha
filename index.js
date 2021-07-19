var platform = require('platform');
const { shell } = require('@electron/remote');

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
      document.getElementById('console').value = '> ';
  }
}

function site() {
  shell.openExternal('https://github.com/MatthewZenn/Alpha');
}

var reader = new FileReader();
reader.onload = function (e) {
    var textArea = document.getElementById("info");
    textArea.value = e.target.result;
};
reader.readAsText('C:\Users\spygu\AppData\Local\Temp\out.txt');
