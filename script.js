const ul = document.querySelector('ul');
const input = document.getElementById('item');
// Global Array 
let itemsArray = JSON.parse(localStorage.getItem('todoList')) || [];


function showTask(){
// showing data
ul.innerHTML=""
itemsArray.map((item ,index)=>{

  const li = document.createElement('li')
  li.innerHTML= `<div>${index+1}. ${item.title}  <button onclick="deleteTask(${item.id})">Delete</button>   <button onclick="editTask(${item.id})">Edit</button>   </div>`;
  ul.appendChild(li);

});
}

showTask()
// add task function
function add(){
  // Current object
if(input.value.length>3){

  const currentObject={
    title:input.value,
    id: itemsArray.length>0 ? itemsArray.length+1 : 1
  }
  
  
    itemsArray.push(currentObject);
    localStorage.setItem('todoList', JSON.stringify(itemsArray));
  
    input.value = '';
  
    showTask()
}
}

function clearAll(){
  localStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
}





function deleteTask(id){

for(let i=0; i<=itemsArray.length;i++){

if(itemsArray[i].id===id){
  itemsArray.splice(i,1)
}

localStorage.setItem("todoList",JSON.stringify(itemsArray))

showTask()
}


}



function editTask(id){
  for(let i=0; i<=itemsArray.length;i++){

    if(itemsArray[i].id===id){
    input.value=itemsArray[i].title


    const currentObject={
      title:input.value,
      id: itemsArray[i].id
    }


    itemsArray.splice(i,1,currentObject)

    }
    


  
  }



localStorage.setItem("todoList",JSON.stringify(itemsArray))

showTask()

}
