import './styles.css'

const form = document.querySelector('form')
let toDoList = document.querySelector('.todo__list')

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
      span.setAttribute('data-listener', true)
    }
  })
  displayRemainingTODo()
}

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

  li.appendChild(div)
  li.appendChild(img)

  ul.appendChild(li)

  input.value = ''
  todoCompleteCheck()
  displayRemainingTODo()
})
