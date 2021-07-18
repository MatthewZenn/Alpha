var platform = require('platform');
const shell = require('electron').shell;
const link = document.querySelector('link4');
const url = link.getAttribute('href');

link.addEventListener('click', function (e) {
  e.preventDefault()
  shell.openExternal(url)
});