function updateRange(id) {
   var value = document.getElementById(id).value; 
   console.log(value);
}

function appendRanges() {
   for(var numRange = 0; numRange < 13; numRange++){//TODO: ver como traer la cantidad de la base
      var newDiv = createDiv();
      var newRange = createRange(numRange);
      var newTextField = createTextField(numRange);
      newDiv.appendChild(newRange);
      newDiv.appendChild(newTextField);
      document.getElementsByTagName('form')[0].appendChild(newDiv);
   }   
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
      newRange.oninput = 'updateRange(' + newRange.id + ')';
   	  return newRange;
}

function createTextField(numTextField) {
    var newTextField = document.createElement('input');
    newTextField.id = 'textField_' + ++numTextField;
    newTextField.type = 'text';
    newTextField.maxLength = 3; //TODO: traer longitud de max
    newTextField.size = 3;
    return newTextField;

}