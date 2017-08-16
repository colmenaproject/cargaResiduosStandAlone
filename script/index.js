$(document).ready(function() {
   appendRanges();
});

function appendRanges() {
   for (var numRange = 0; numRange < 16; numRange++) { //TODO: ver como traer la cantidad de la base
      appendRange(numRange);
   }
   document.getElementsByTagName('form')[0]
      .appendChild(createDiv()
         .appendChild(createSubmitBtn()));
}

function appendRange(numRange) {
   var capacity = createLabel(numRange);
   var newRange = createRange(numRange);
   var newTextField = createTextField(numRange);
   var lblBotellas = createLblBotellas();
   var newDiv = appendChildren(capacity, newRange, newTextField, lblBotellas);
   document.getElementsByTagName('form')[0].appendChild(newDiv);
}

function appendChildren(capacity, newRange, newTextField, lblBotellas) {
   var newDiv = createDiv();
   newDiv.appendChild(capacity);
   newDiv.appendChild(newRange);
   newDiv.appendChild(newTextField);
   newDiv.appendChild(lblBotellas);
   return newDiv;
}

function createSubmitBtn() {
   var btnSubmit = document.createElement('input');
   btnSubmit.type = "submit";
   btnSubmit.value = "Registrar";
   return btnSubmit;
}

function createLblBotellas() {
   var lblBotellas = document.createElement('label');
   lblBotellas.innerHTML = "botellas";
   return lblBotellas;
}

function createLabel(numRange) {
   var capacity = document.createElement('label');
   var capacities = [0.3, 0.5, 0.75, 0.8, 0.9, 1, 1.25, 1.35, 1.5, 1.65, 2, 2.25, 2.5, 3, 5, 6];
   capacities = capacities.map(capacity => capacity.toFixed(2));
   capacity.innerHTML = `${capacities[numRange]} lts.`;
   return capacity;
   //TODO: ver como traer las capacidades de la DB
   //TODO: Otra
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
   $(document).on('input', `#${newRange.id}`, updateTextField);
   return newRange;
}

function updateTextField(event) {
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
   $(document).on('input', `#${newTextField.id}`, updateRange);
   return newTextField;
}

function updateRange(event) {
   var component = document.getElementById(event.target.id.replace('textField', 'range')); //TODO: hacer una funcion más generica, considerar updateTextField
   component.value = event.target.value;
}

function createRange(numRange) {
      var newRange = document.createElement('input');
      newRange.id = 'range_' + ++numRange;
      newRange.type = 'range';
      newRange.min = 0;
      newRange.max = 150;
      newRange.value = 0;
      $(document).on('input', `#${newRange.id}`, updateTextField);
      return newRange;
}

function updateTextField(event) {
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
    $(document).on('input', `#${newTextField.id}`, updateRange);
    return newTextField;
}

function updateRange(event) {
   var component = document.getElementById(event.target.id.replace('textField', 'range'));//TODO: hacer una funcion más generica, considerar updateTextField
   component.value = event.target.value; 
}
