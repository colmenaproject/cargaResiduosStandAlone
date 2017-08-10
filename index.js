
function updateRange(id) {
var value = document.getElementById(id).value; 
console.log(value);
}

function createRanges(){
var i = 0;
var newDiv = document.createElement('div');
newDiv.id = 'range_' + ++i; 
document.getElementsByTagName('form')[0].appendChild(newDiv);

}

