const ul = document.querySelector('ul');
const input = document.getElementById('item');
// Global Array 
let itemsArray = JSON.parse(localStorage.getItem('todoList')) || [];


function showTask(){
// showing data
ul.innerHTML=""
itemsArray.map((item)=>{

  const li = document.createElement('li')
  li.textContent = `${item.id}. ${item.title}`;
  ul.appendChild(li);

});
}

showTask()
// add task function
function add(){
  // Current object
const currentObject={
  title:input.value,
  id: itemsArray.length>0 ? itemsArray[itemsArray.length].id+1 : 1
}


  itemsArray.push(currentObject);
  localStorage.setItem('todoList', JSON.stringify(itemsArray));

  input.value = '';

  showTask()
}

function del(){
  localStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
}
