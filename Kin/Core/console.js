//document.getElementById('output').value = document.getElementById('console').value;

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
    else {
      document.getElementById('output').value = document.getElementById('console').value;
    }
}
