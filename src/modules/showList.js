// Remove hide class from list
const showList = () => {
  const allSpanArr = [...document.querySelectorAll('li span')]
  allSpanArr.forEach((span) => {
    span.parentElement.parentElement.classList.remove('hide')
  })
}

export default showList
