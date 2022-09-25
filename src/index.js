import './styles.css'
import moonIcon from '../images/icon-moon.svg'
import sunIcon from '../images/icon-sun.svg'
import displayRemainingToDo from './modules/displayRemainingToDo'
import todoCompleteCheck from './modules/todoCompleteCheck'
import iconCross from '../images/icon-cross.svg'
import elemObj from './modules/elemObj'
import showList from './modules/showList'
import toDoArr from './modules/toDoArr'
import addToDo from './modules/addToDo'


elemObj().moonImage.setAttribute('src', moonIcon)
elemObj().sunImage.setAttribute('src', sunIcon)

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 800) {
    const todoStatus = document.querySelector('.todo__status')
    const sibling = document.querySelector('.js-place-after')
    sibling.after(todoStatus)
  }

  toDoArr.forEach((todo, index) => addToDo(todo, index))
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

// Runs on form submit
elemObj().form.addEventListener('submit', (e) => {
  e.preventDefault()

  const input = document.querySelector('input')
  const ul = document.querySelector('ul')
  const div = document.createElement('div')
  const li = document.createElement('li')
  const span = document.createElement('span')
  const para = document.createElement('p')
  const img = document.createElement('img')
  const index = toDoArr.length

  span.classList.add('circle')
  para.textContent = input.value

  // Push to array and save in localStorage
  toDoArr.push(input.value)
  localStorage.setItem('to-do-list', JSON.stringify(toDoArr))

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

  img.setAttribute('src', iconCross)
  img.setAttribute('alt', '')
  img.classList.add('close-icon')

  img.addEventListener('click', () => {
    const toDoList = document.querySelector('.todo__list')
    toDoList.removeChild(img.parentElement)
    toDoArr.splice(index, 1)
    localStorage.setItem('to-do-list', JSON.stringify(toDoArr))
    displayRemainingToDo()
  })

  li.appendChild(div)
  li.appendChild(img)
  li.setAttribute('draggable', true)

  ul.appendChild(li)

  input.value = ''

  elemObj().allToDo.classList.add('active')
  elemObj().activeToDo.classList.remove('active')
  elemObj().completedToDo.classList.remove('active')

  todoCompleteCheck()
  displayRemainingToDo()
  showList()
})

elemObj().clearCompletedBtn.addEventListener('click', () => {
  const completedToDos = [...document.querySelectorAll('.completed')]
  completedToDos.forEach((todo) => {
    const toDoList = document.querySelector('.todo__list')
    toDoList.removeChild(todo.parentElement.parentElement)
  })
})

elemObj().activeToDo.addEventListener('click', () => {
  elemObj().activeToDo.classList.add('active')
  elemObj().allToDo.classList.remove('active')
  elemObj().completedToDo.classList.remove('active')

  const allSpanArr = [...document.querySelectorAll('li span')]
  allSpanArr.forEach((span) => {
    if (span.classList.contains('completed')) {
      span.parentElement.parentElement.classList.add('hide')
    } else {
      span.parentElement.parentElement.classList.remove('hide')
    }
  })
})

elemObj().completedToDo.addEventListener('click', () => {
  elemObj().completedToDo.classList.add('active')
  elemObj().allToDo.classList.remove('active')
  elemObj().activeToDo.classList.remove('active')

  const allSpanArr = [...document.querySelectorAll('li span')]
  allSpanArr.forEach((span) => {
    if (span.classList.contains('completed')) {
      span.parentElement.parentElement.classList.remove('hide')
    } else {
      span.parentElement.parentElement.classList.add('hide')
    }
  })
})

elemObj().allToDo.addEventListener('click', () => {
  elemObj().allToDo.classList.add('active')
  elemObj().activeToDo.classList.remove('active')
  elemObj().completedToDo.classList.remove('active')

  showList()
})

// ------------Themes------------
elemObj().darkTheme.addEventListener('click', () => {
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

elemObj().lightTheme.addEventListener('click', () => {
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
