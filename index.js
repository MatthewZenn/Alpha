var platform = require('platform');
const shell = require('electron').shell;
const link = document.querySelector('link4');
const url = link.getAttribute('href');

link.addEventListener('click', function (e) {
  e.preventDefault()
  shell.openExternal(url)
});

function press(event) {
  if (event.keyCode == 13 && !event.shiftKey) {
      
      //Stops enter from creating a new line
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