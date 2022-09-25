const elemObj = () => {
  const form = document.querySelector('form')
  const clearCompletedBtn = document.querySelector('.js-clear-completed')
  const allToDo = document.querySelector('.all__todo')
  const activeToDo = document.querySelector('.active__todo')
  const completedToDo = document.querySelector('.completed__todo')
  const darkTheme = document.querySelector('#theme__dark')
  const lightTheme = document.querySelector('#theme__light')
  const moonImage = document.querySelector('#theme__dark')
  const sunImage = document.querySelector('#theme__light')

  return {
    form,
    clearCompletedBtn,
    allToDo,
    activeToDo,
    completedToDo,
    darkTheme,
    lightTheme,
    moonImage,
    sunImage,
  }
}

export default elemObj
