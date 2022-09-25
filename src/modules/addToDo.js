import iconCross from '../../images/icon-cross.svg'
import displayRemainingToDo from './displayRemainingToDo'
import todoCompleteCheck from './todoCompleteCheck'
import showList from './showList'
import elemObj from './elemObj'
import { toDoArr, spliceToDoArr } from './toDoArr'

const addToDo = (todoStr, index) => {
  const ul = document.querySelector('ul')
  const div = document.createElement('div')
  const li = document.createElement('li')
  const span = document.createElement('span')
  const para = document.createElement('p')
  const img = document.createElement('img')

  span.classList.add('circle')
  para.textContent = todoStr

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
    // toDoList.removeChild(img.parentElement)
    // console.log(toDoArr)
    spliceToDoArr(index, 1)
    // console.log(toDoArr)
    localStorage.setItem('to-do-list', JSON.stringify(toDoArr))

    toDoList.innerHTML = ''
    toDoArr.forEach((item, i) => addToDo(item, i))
    displayRemainingToDo()
  })

  li.appendChild(div)
  li.appendChild(img)
  li.setAttribute('draggable', true)

  ul.appendChild(li)

  elemObj().allToDo.classList.add('active')
  elemObj().activeToDo.classList.remove('active')
  elemObj().completedToDo.classList.remove('active')

  todoCompleteCheck()
  displayRemainingToDo()
  showList()
}

export default addToDo
