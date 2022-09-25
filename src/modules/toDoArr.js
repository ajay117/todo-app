const toDoArr = JSON.parse(localStorage.getItem('to-do-list')) || []

const spliceToDoArr = (index, removeNum) => {
  toDoArr.splice(index, removeNum)
}

export { toDoArr, spliceToDoArr }
