var inputItem = document.getElementById("inputItem");
inputItem.focus();

var index = 0 ;
var data = [];

var getItemIndex = 0 ;
while(true){
  var key = "data" + getItemIndex;
  var value = localStorage.getItem(key);
  if(value == 'empty0.'){
    getItemIndex++;
     continue;
  }
  if(value == null || value == "null" || value =='undefined') break;
  var textbox = document.createElement("input");
  textbox.type = 'text';
  textbox.setAttribute("value", value);
  addItem('sortable' , textbox)
  getItemIndex++;
}





// Click on a close button to hide the current list item
var close = document.getElementsByClassName("fa fa-trash fa-lg");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    var item = div.getElementsByClassName('Badawi')[0].innerText;
    var index = data.indexOf(item);
    data[index] = 'empty0.';
    console.log(data);
  }
}





// adds input Item to list
// list is the ID of UL
// input is the ID of input
function addItem(list, input) {
var inputItem = this.inputItem;
var list = document.getElementById(list);
var listItem = document.createElement("li");
listItem.setAttribute("draggable", "true");
listItem.setAttribute("class", "box");


  
  // Configure the delete button
  var deleteButton = document.createElement("span");
  deleteButton.classList = "fa fa-trash fa-lg";
  deleteButton.addEventListener("click", function() {
    var div = this.parentElement;
    div.style.display = "none";
  });
  
  // Configure the label
  var label = document.createElement("label");
  var labelText = document.createElement("label");
  label.setAttribute("style", "margin-right: 400px;height: 30px;width: 150px;");
  label.setAttribute("contenteditable" , "true");
  labelText.classList = "Badawi"
  labelText.innerText = input.value;
  
  // Configure the check box
  var checkBox = document.createElement("input");
  checkBox.type = 'checkbox';
  checkBox.setAttribute("style", "margin-right: 10px;");
  checkBox.addEventListener('change', function() {
    labelText.style.textDecoration = checkBox.checked ? 'line-through' : 'none';
    
  });
  
  // Put the checkbox and label text in to the label element
  label.appendChild(checkBox);
  label.appendChild(labelText);
  data[index] = input.value;
  index++;
  
  // Put the label (with the checkbox inside) and the delete
  // button into the list item.
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  var newline = document.createElement("hr");
  listItem.appendChild(newline);
  list.appendChild(listItem);
  inputItem.focus();
  inputItem.select();
  return false;
}

function deleteAll(){
  document.getElementById("sortable").innerHTML = "<hr>";
  data = [];
  var key = 'data0';
  var value = null;
  localStorage.setItem(key , value);
}

function saveTolocalStorage(){
  var length = data.length;
  for(var i = 0 ; i < length ; i++){
    var key = 'data'+i;
    var value = data[i];
    localStorage.setItem(key , value);
  }
}






