// Code to know and render how many items are left
 const displayRemainingToDo = () => {
    const li = [...document.querySelectorAll('li')]
    const completedClass = document.querySelectorAll('.completed')
    const itemsLeft = document.querySelector('.items__left')
    const remainingToDo = li.length - completedClass.length
    itemsLeft.textContent =
      remainingToDo > 1 ? `${remainingToDo} items` : `${remainingToDo} item`
  }

  export default displayRemainingToDo