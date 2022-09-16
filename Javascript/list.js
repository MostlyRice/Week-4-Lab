    
  // Variables
  let textInput = document.querySelector('#text')
  let saveButton = document.querySelector('#save-to-list')
  let textList = document.querySelector('#list')
  let clearButton = document.querySelector('#clear-list')

  let elementsInList = 0
  let maxElements = 10
  
  document.addEventListener('keyup', function(event){
    if (event.keyCode == 13 || event.key == 'Enter'){
      addButton.click()
    }
  })

  // Event listener for the saveButton
  saveButton.addEventListener('click', function() {
    // Reads the text in the input
    let text = textInput.value

    // Validates user has typed in some text
    if (text.length == 0 ){
      alert('Enter some text.')
      return
    }
    // Display an alert error message if it the text too long - more than 50 characters
    if (text.length >= 50 ){
      alert('Text is too long. Should be less than 50 characters.')
      return
    }
    // Prevent the user adding more than 10 items to the list.
    if (elementsInList >= maxElements){
      alert('No more elements can be added.')
      return
    }

    // Create a new li item
    let listItem = document.createElement('li')
    // The li element text should be the text from the input
    listItem.innerHTML = text 
    // Add the new li element as a child of the ul element
    textList.appendChild(listItem)
    // Clears the text in the input
    textInput.value = ''
    // Adds to the counter
    elementsInList++
  })

  // Event listener for the clearButton
  clearButton.addEventListener('click', function() {
    textList.innerHTML = ''
    // If the clear button is clicked, the user may keep adding items. 
    elementsInList = 0
  })
    