

document.addEventListener('DOMContentLoaded', function() {
    var calculator = document.getElementById('calculator');
    var result = document.getElementById('result');
    var buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/', '%'];
  
   
    buttons.forEach(function(button) {
      var btn = document.createElement('button');
      btn.classList.add('btn', 'btn-secondary');
      btn.textContent = button;
  
      if (button === 'C') {
        btn.classList.add('btn-danger');
        btn.addEventListener('click', function() {
          result.value = '';
        });
      } else if (button === '=') {
        btn.classList.add('btn-primary');
        btn.addEventListener('click', function() {
          try {
            result.value = eval(result.value);
          } catch (error) {
            alert('Invalid expression!');
          }
        });
      } else {
        btn.addEventListener('click', function() {
          result.value += button;
        });
      }
  
      calculator.appendChild(btn);
    });
  
   
    document.addEventListener('keydown', function(event) {
      var key = event.key;
      if (!/^[0-9]+$/.test(key)) {
        alert('Only numbers are allowed!');
        event.preventDefault();
      }
    });
  });
  