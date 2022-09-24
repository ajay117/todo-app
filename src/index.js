import './styles.css'

const form = document.querySelector('form')
const clearCompletedBtn = document.querySelector('.js-clear-completed')
const allToDo = document.querySelector('#all__todo')
const activeToDo = document.querySelector('#active__todo')
const completedToDo = document.querySelector('#completed__todo')

// Code to know and render how many items are left
const displayRemainingTODo = () => {
  const li = [...document.querySelectorAll('li')]
  const completedClass = document.querySelectorAll('.completed')
  const itemsLeft = document.querySelector('.items__left')
  const remainingToDo = li.length - completedClass.length
  itemsLeft.textContent =
    remainingToDo > 1 ? `${remainingToDo} items` : `${remainingToDo} item`
}

// code when a todo is complete
const todoCompleteCheck = () => {
  const allSpanArr = [...document.querySelectorAll('li span')]

  allSpanArr.forEach((span) => {
    const checkToDo = () => {
      const img = document.createElement('img')
      const siblingPara = span.nextElementSibling
      if (!span.classList.contains('completed')) {
        span.classList.add('completed')

        img.setAttribute('src', '../images/icon-check.svg')
        img.setAttribute('alt', '')

        span.appendChild(img)
        siblingPara.classList.add('todo__complete')
      } else {
        span.classList.remove('completed')
        siblingPara.classList.remove('todo__complete')
      }
    }

    if (!span.getAttribute('data-listener')) {
      span.addEventListener('click', checkToDo)
      span.addEventListener('click', displayRemainingTODo)
      span.setAttribute('data-listener', true)
    }
  })
  displayRemainingTODo()
}

// Remove hide class from list
const showList = () => {
  const allSpanArr = [...document.querySelectorAll('li span')]
  allSpanArr.forEach((span) => {
    span.parentElement.parentElement.classList.remove('hide')
  })
}

// Runs on form submit
form.addEventListener('submit', (e) => {
  e.preventDefault()

  const input = document.querySelector('input')
  const ul = document.querySelector('ul')
  const div = document.createElement('div')
  const li = document.createElement('li')
  const span = document.createElement('span')
  const para = document.createElement('p')
  const img = document.createElement('img')

  span.classList.add('circle')
  para.textContent = input.value

  div.appendChild(span)
  div.appendChild(para)

  img.setAttribute('src', '../images/icon-cross.svg')
  img.setAttribute('alt', '')
  img.classList.add('close-icon')

  img.addEventListener('click', () => {
    const toDoList = document.querySelector('.todo__list')
    toDoList.removeChild(img.parentElement)
    displayRemainingTODo()
  })

  li.appendChild(div)
  li.appendChild(img)

  ul.appendChild(li)

  input.value = ''

  allToDo.classList.add('active')
  activeToDo.classList.remove('active')
  completedToDo.classList.remove('active')

  todoCompleteCheck()
  displayRemainingTODo()
  showList()
})

clearCompletedBtn.addEventListener('click', () => {
  const completedToDos = [...document.querySelectorAll('.completed')]
  completedToDos.forEach((todo) => {
    const toDoList = document.querySelector('.todo__list')
    toDoList.removeChild(todo.parentElement.parentElement)
  })
})

activeToDo.addEventListener('click', () => {
  activeToDo.classList.add('active')
  allToDo.classList.remove('active')
  completedToDo.classList.remove('active')

  const allSpanArr = [...document.querySelectorAll('li span')]
  allSpanArr.forEach((span) => {
    if (span.classList.contains('completed')) {
      span.parentElement.parentElement.classList.add('hide')
    } else {
      span.parentElement.parentElement.classList.remove('hide')
    }
  })
})

completedToDo.addEventListener('click', () => {
  completedToDo.classList.add('active')
  allToDo.classList.remove('active')
  activeToDo.classList.remove('active')

  const allSpanArr = [...document.querySelectorAll('li span')]
  allSpanArr.forEach((span) => {
    if (span.classList.contains('completed')) {
      span.parentElement.parentElement.classList.remove('hide')
    } else {
      span.parentElement.parentElement.classList.add('hide')
    }
  })
})

allToDo.addEventListener('click', () => {
  allToDo.classList.add('active')
  activeToDo.classList.remove('active')
  completedToDo.classList.remove('active')

  showList()
})
