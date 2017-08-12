$(document).ready(function(){
  appendRanges();
});


function appendRanges() {
   for(var numRange = 0; numRange < 13; numRange++){//TODO: ver como traer la cantidad de la base
      var newDiv = createDiv();
      var newLabel = createLabel();
      var newRange = createRange(numRange);
      var newTextField = createTextField(numRange);
      newDiv.appendChild(newLabel);
      newDiv.appendChild(newRange);
      newDiv.appendChild(newTextField);
      document.getElementsByTagName('form')[0].appendChild(newDiv);
   }   
}

function createLabel(){
  var newLabel = document.createElement('label');
  newLabel.innerHTML = "Capacidad ()";
  return newLabel;
  //TODO: ver como traer las capacidades de la DB
  //0.3, 0.5, 0.75, 0.8, 0.9, 1, 1.25, 1.35, 1.5, 1.65, 2, 2.25, 2.5, 3, 5, 6, Otra
}

function createDiv() {  
  return document.createElement('div');
}

function createRange(numRange) {
      var newRange = document.createElement('input');
      newRange.id = 'range_' + ++numRange;
      newRange.type = 'range';
      newRange.min = 0;
      newRange.max = 150;
      newRange.value = 0;
      $(document).on('input', `#${newRange.id}`, updateRange);
      return newRange;
}

function updateRange(event) {
   var txtField = document.getElementById(event.target.id.replace('range', 'textField'));
   txtField.value = event.target.value; 
}

function createTextField(numTextField) {
    var newTextField = document.createElement('input');
    newTextField.id = 'textField_' + ++numTextField;
    newTextField.type = 'text';    
    newTextField.value = 0;
    newTextField.maxLength = 3; //TODO: traer longitud de max
    newTextField.size = 3;
    return newTextField;
}
