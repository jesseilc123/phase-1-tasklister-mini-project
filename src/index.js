document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    buildToDo(e.target["new-task-description"].value)
    form.reset()
  })

});

function buildToDo(todo){
  let p = document.createElement("p")
  let deleteBtn = document.createElement("button")
  let editBtn = document.createElement("button")
  let p2 = document.querySelector("#duration").value
 
  deleteBtn.addEventListener("click", handleDelete)
  deleteBtn.textContent = "x"

  editBtn.addEventListener("click", handleEdit)
  editBtn.textContent = "edit"

  p.textContent = `${todo} -- ${p2} min `
  p.appendChild(deleteBtn)
  p.appendChild(editBtn)

  if(document.querySelector("#priority").value === "High Priority"){
    p.style.backgroundColor = "red"
  }
  if(document.querySelector("#priority").value === "Medium"){
    p.style.backgroundColor = "yellow"
  }
  if(document.querySelector("#priority").value === "Low"){
    p.style.backgroundColor = "green"
  }

  document.querySelector("#list").appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}

function handleEdit(e){
  e.target.parentNode.contentEditable = true
}

