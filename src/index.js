import './styles.css'
import moonIcon from '../images/icon-moon.svg'
import sunIcon from '../images/icon-sun.svg'
import displayRemainingToDo from './modules/displayRemainingToDo'
import todoCompleteCheck from './modules/todoCompleteCheck'

const form = document.querySelector('form')
const clearCompletedBtn = document.querySelector('.js-clear-completed')
const allToDo = document.querySelector('.all__todo')
const activeToDo = document.querySelector('.active__todo')
const completedToDo = document.querySelector('.completed__todo')
const darkTheme = document.querySelector('#theme__dark')
const lightTheme = document.querySelector('#theme__light')
const moonImage = document.querySelector('#theme__dark')
const sunImage = document.querySelector('#theme__light')

moonImage.setAttribute('src', moonIcon)
sunImage.setAttribute('src', sunIcon)



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

  if (document.querySelector('#theme__dark').classList.contains('hide')) {
    span.addEventListener('mousedown', () => {
      span.style.borderColor = 'hsl(234, 39%, 85%)'
    })
    span.addEventListener('mouseup', () => {
      span.style.borderColor = ''
    })
  }

  div.appendChild(span)
  div.appendChild(para)

  img.setAttribute('src', '../images/icon-cross.svg')
  img.setAttribute('alt', '')
  img.classList.add('close-icon')

  img.addEventListener('click', () => {
    const toDoList = document.querySelector('.todo__list')
    toDoList.removeChild(img.parentElement)
    displayRemainingToDo()
  })

  li.appendChild(div)
  li.appendChild(img)
  li.setAttribute('draggable', true)

  // Drag and Drop-------------------------

  // function handleDragStart(elem) {
  //   this.style.opacity = '0.4'
  //   // console.log(e.target)
  // }

  // function handleDragEnd(elem) {
  //   this.style.opacity = '1'
  //   console.log(this);
  // }

  // function handleDragOver(elem) {
  //   elem.preventDefault()
  //   return false
  // }

  // function handleDragEnter() {
  //   console.log(this, 'enter')
  //   this.classList.add('over')
  // }

  // li.addEventListener('dragstart', handleDragStart)
  // li.addEventListener('dragover', handleDragOver)
  // li.addEventListener('dragenter', handleDragEnter)
  // li.addEventListener('dragend', handleDragEnd)

  // li.addEventListener

  // --------------------------------------------------

  ul.appendChild(li)

  input.value = ''

  allToDo.classList.add('active')
  activeToDo.classList.remove('active')
  completedToDo.classList.remove('active')

  todoCompleteCheck()
  displayRemainingToDo()
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

// Dark theme
darkTheme.addEventListener('click', () => {
  document.querySelector('#theme__dark').classList.add('hide')
  document.querySelector('#theme__light').classList.remove('hide')

  const body = document.querySelector('body')
  const toDoList = document.querySelector('.todo__list')
  const toDoInfo = document.querySelector('.todo__info')
  const toDoInfoLink = document.querySelector('.todo__info a')
  const todoStatus = document.querySelector('.todo__status')
  const input = document.querySelector('input')
  const circleArr = [...document.querySelectorAll('.circle')]

  circleArr.forEach((circle) => {
    circle.addEventListener('mousedown', (e) => {
      e.target.style.borderColor = 'hsl(234, 39%, 85%)'
    })
    circle.addEventListener('mouseup', (e) => {
      e.target.style.borderColor = ''
    })
  })

  body.style.backgroundColor = 'hsl(235, 21%, 11%)'
  toDoList.style.backgroundColor = 'hsl(235, 24%, 19%)'
  toDoInfo.style.backgroundColor = 'hsl(235, 24%, 19%)'
  todoStatus.style.backgroundColor = 'hsl(235, 24%, 19%)'
  toDoInfo.style.color = ' hsl(234, 11%, 52%)'
  toDoInfoLink.style.color = ' hsl(234, 11%, 52%)'
  input.style.backgroundColor = 'hsl(235, 24%, 19%)'
})

lightTheme.addEventListener('click', () => {
  document.querySelector('#theme__light').classList.add('hide')
  document.querySelector('#theme__dark').classList.remove('hide')

  const body = document.querySelector('body')
  const toDoList = document.querySelector('.todo__list')
  const toDoInfo = document.querySelector('.todo__info')
  const toDoInfoLink = document.querySelector('.todo__info a')
  const todoStatus = document.querySelector('.todo__status')
  const input = document.querySelector('input')

  body.style.backgroundColor = ''
  toDoList.style.backgroundColor = ''
  toDoInfo.style.backgroundColor = ''
  todoStatus.style.backgroundColor = ''
  toDoInfo.style.color = ''
  toDoInfoLink.style.color = ''
  input.style.backgroundColor = ''
})

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 800) {
    const todoStatus = document.querySelector('.todo__status')
    const sibling = document.querySelector('.js-place-after')
    sibling.after(todoStatus)
  }
})

window.addEventListener('resize', () => {
  // console.log(window.innerWidth)
  if (window.innerWidth > 800) {
    const todoStatus = document.querySelector('.todo__status')
    const sibling = document.querySelector('.js-place-after')
    sibling.after(todoStatus)
  } else {
    const sibling = document.querySelector('.todo__info')
    const todoStatus = document.querySelector('.todo__status')
    sibling.parentElement.appendChild(todoStatus)
  }
})
