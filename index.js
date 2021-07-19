var platform = require('platform');
const { shell } = require('@electron/remote');

function site() {
  shell.openExternal('https://github.com/MatthewZenn/Alpha');
}

var reader = new FileReader();
reader.onload = function (e) {
    var textArea = document.getElementById("info");
    textArea.value = e.target.result;
};

reader.readAsText('C:\Users\%USERNAME%\AppData\Local\Temp\out.txt');
