const dragItems = document.querySelectorAll('.drag')
const dropBoxes = document.querySelectorAll('.box-space-droppable')

dragItems.forEach(item => {
  item.addEventListener('dragstart', dragStart)
});

function dragStart() {
  setTimeout(() => {
    this.className = 'invisible'
  }, 0)
}