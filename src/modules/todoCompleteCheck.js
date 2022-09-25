import displayRemainingToDo from "./displayRemainingToDo"
import checkIcon from '../../images/icon-check.svg'

// code when a todo is complete
const todoCompleteCheck = () => {
  const allSpanArr = [...document.querySelectorAll('li span')]

  allSpanArr.forEach((span) => {
    const checkToDo = () => {
      if (!span.classList.contains('completed')) {
        const img = document.createElement('img')
        const siblingPara = span.nextElementSibling
        span.classList.add('completed')

        img.setAttribute('src', checkIcon)
        img.setAttribute('alt', '')

        span.appendChild(img)
        siblingPara.classList.add('todo__complete')
      } else {
        const img = span.querySelector('img')
        const siblingPara = span.nextElementSibling

        span.classList.remove('completed')
        span.removeChild(img)

        siblingPara.classList.remove('todo__complete')
      }
    }

    if (!span.getAttribute('data-listener')) {
      span.addEventListener('click', checkToDo)
      span.addEventListener('click', displayRemainingToDo)
      span.setAttribute('data-listener', true)
    }
  })
  displayRemainingToDo()
}


export default todoCompleteCheck