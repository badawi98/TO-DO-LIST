
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var inputItem = document.getElementById("inputItem");
inputItem.focus();

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("fa fa-trash fa-lg");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

window.onunload = function() {
  localStorage.setItem("badawi", "hello"); // save localStorage to noselection state
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


  // create an li object to add it the ul
  
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
  labelText.setAttribute("ondblclick", "this.contentEditable=true;this.className='inEdit';");
  labelText.setAttribute("onblur", "this.contentEditable=false;this.className='';");
  labelText.setAttribute("contenteditable", "flase");
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
  
  // Put the label (with the checkbox inside) and the delete
  // button into the list item.
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  var newline = document.createElement("hr");

  listItem.appendChild(newline);
  list.appendChild(listItem);
  inputItem.focus();
  inputItem.select();
  var x = document.getElementsByTagName('li');
  localStorage.setItem("comp", x); // save localStorage to noselection state
  return false;
}

function deleteAll(){
  document.getElementById("list").innerHTML = "";

}

/*function addTask() {
    var item = "<div class=\"container\">"
        +"<div class=\"row\">"
            +"<div class=\"col-10\">"
                +"<div class=\"form-check\">"
                    +"<input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">"
                    +"<label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>"
                +"</div>"     
            +"</div>"
            +"<div class=\"col-2\">"
                +"<i class=\"fa fa-trash fa-lg\"></i>"
            +"</div>"
        +"</div>"
    +"</div>";
    document.getElementById('tasks').append(item);
}*/