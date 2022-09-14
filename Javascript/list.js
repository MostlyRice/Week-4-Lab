    
  let textInput = document.querySelector('#text')
  let saveButton = document.querySelector('#save-to-list')
  let textList = document.querySelector('#list')
  let clearButton = document.querySelector('#clear-list')
    
  saveButton.addEventListener('click', function() {
    let text = textInput.value
    let listItem = document.createElement('li')
    listItem.innerHTML = text 
    textList.appendChild(listItem)
    textInput.value = ''
  })

  clearButton.addEventListener('click', function() {
    textList.innerHTML = ''
  })
    