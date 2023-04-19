const ul = document.querySelector('ul');
const input = document.getElementById('item');
// Global Array 
let itemsArray = JSON.parse(localStorage.getItem('todoList')) || [];

// showing data
itemsArray.forEach(addTask);
function addTask(text,id){
  const li = document.createElement('li')
  li.textContent = `${id}. ${text}`;
  ul.appendChild(li);
}


// add task function
function add(){
  // Current object
const currentObject={
  title:input.value,
 id: itemsArray.length>0 ? itemsArray.length+1 : 1
}


  itemsArray.push(currentObject);
  localStorage.setItem('todoList', JSON.stringify(itemsArray));
  addTask(currentObject.title,currentObject.id);
  input.value = '';
}

function del(){
  localStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
}
