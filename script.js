const dragItems = document.querySelectorAll('.drag')
const dropBoxes = document.querySelectorAll('.box-space-droppable')

// Drag Events
dragItems.forEach(item => {
  item.addEventListener('dragstart', dragStart)
});

//Drop Events
dropBoxes.forEach(box => {
  box.addEventListener('dragover', dragOver);
  box.addEventListener('drop', dropEvent);
  box.addEventListener('dragleave', dragLeave);
});

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.innerText)

  setTimeout(() => {
    this.className = 'invisible'
  }, 0)
}

function dragOver(e) {
  e.preventDefault();
  
  this.className += ' enter'
}

function dropEvent(e) {
  e.preventDefault();
  
  this.className = 'box-space-droppable'

  const el = document.createElement('p');
  el.className = 'drag';
  el.innerText = e.dataTransfer.getData('text');

  el.setAttribute('draggable', 'true');

  this.appendChild(el);
}

function dragLeave(e) {
  e.preventDefault();

  this.className = 'box-space-droppable'
}