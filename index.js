const taskInput = document.getElementById('taskInput')
const taskForm = document.getElementById('taskForm')
const taskDeleteBtn = document.getElementById('taskDeleteBtn')
const taskEditBtn = document.getElementById('taskEditBtn')
const taskList = document.getElementById('taskList')

var tasks = []

taskForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (taskInput.value !== '') {
    const newTask = {
      id: tasks.length + 1,
      content: taskInput.value,
      date: new Date()
    }
    tasks = [...tasks, newTask]
    taskList.innerHTML = ''
    if (tasks.length > 0) {
      tasks.forEach((task) => {
        const li = document.createElement('li')
        const p = document.createElement('p')
        const buttonEdit = document.createElement('button')
        const div = document.createElement('div')
        li.classList = 'listItem'
        buttonEdit.classList = 'botoncito-form'
        p.classList = 'taskTitle'
        div.classList = 'buttonsDiv'
        buttonEdit.id = 'taskEditBtn'
        buttonEdit.innerHTML = 'Editar'
        const buttonDelete = document.createElement('button')
        buttonDelete.classList = 'botoncito-form'
        buttonDelete.id = 'taskDeleteBtn'
        buttonDelete.innerHTML = 'X'
        buttonDelete.addEventListener('click', (e) => {
          let li = e.target.parentElement.parentElement
          taskList.removeChild(li)
        })
        div.append(buttonDelete)
        div.append(buttonEdit)
        li.appendChild(p)
        li.appendChild(div)
        p.innerHTML = task.content
        taskList.appendChild(li)
      })
      taskInput.value = ''
    }
  }
})

function deleteBtn() {
  const buttonDelete = document.createElement('button')
  buttonDelete.classList = 'botoncito-form'
  buttonDelete.id = 'taskDeleteBtn'
  buttonDelete.innerHTML = 'X'
  buttonDelete.addEventListener('click', (e) => {
    let li = e.target.parentElement.parentElement
    taskList.removeChild(li)
  })
  taskInput.value = ''
  console.log(taskList.innerHTML)
  return { buttonDelete, localStorage }
}

// function createItems() {
//   const { li, p, buttonEdit, div } = createItems()
//   const { buttonDelete } = deleteBtn()
//   li.appendChild(p)
//   li.appendChild(div)
//   div.append(buttonDelete)
//   div.append(buttonEdit)
//   taskList.appendChild(li)

//   return { li, p, buttonEdit, div, buttonDelete }
// }

function createItems() {
  taskList.innerHTML = ''
  tasks.map((task) => {
    const li = document.createElement('li')
    const p = document.createElement('p')
    const buttonEdit = document.createElement('button')
    const div = document.createElement('div')
    li.classList = 'listItem'
    buttonEdit.classList = 'botoncito-form'
    p.classList = 'taskTitle'
    div.classList = 'buttonsDiv'
    buttonEdit.id = 'taskEditBtn'
    buttonEdit.innerHTML = 'Editar'
    const { buttonDelete } = deleteBtn()
    div.append(buttonDelete)
    div.append(buttonEdit)
    li.appendChild(p)
    li.appendChild(div)
    p.innerHTML = task.content
    taskList.appendChild(li)
    taskInput.value = ''
  })

  return { li, p, div, buttonDelete, buttonEdit, taskList }
}

// const { li, p, div, buttonDelete, buttonEdit, taskList } = createItems()
