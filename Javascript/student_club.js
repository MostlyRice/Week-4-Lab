 // Variables
let studentCount = document.querySelector('#student-count')
let studentName = document.querySelector('#student-name')
let studentID = document.querySelector('#student-id')
let studentGPA = document.querySelector('#student-gpa')
let studentList = document.querySelector('#student-list')
let addStudent = document.querySelector('#add-student')
let studentsInList = 0

// Event listener for the saveButton
addStudent.addEventListener('click', function() {
// Reads the text in the input
let studentNameText = studentName.value
let studentIDText = studentID.value
let studentGPAText = studentGPA.value

// validation
if (studentNameText  == '' ){
    alert('Enter a name.')
    return
  }

  if (studentIDText  == '' ){
    alert('Enter your Student ID.')
    return
  }

  if (studentGPAText  >= 4 || studentGPAText  == ''){
    alert('GPA range has to be between 0-4.')
    return
  }

// Create a new li item
let listItem = document.createElement('li')
// The li element text should be the text from the input
listItem.innerHTML = ' ' + studentNameText + ' ' + studentIDText + ' ' + studentGPAText
// Add the new li element as a child of the ul element
studentList.appendChild(listItem)
// Clears the text in the input
studentName.value = ''
studentID.value = ''
studentGPA.value = ''
// Adds to the counter
studentsInList++
studentCount.innerHTML = studentsInList
})
    /* Add the following functionality to this page

    [Note on HTML element notation: span#student-count means the span element with id="student-count" ]

    When the page loads:
        * Using JavaScript, display 0 in the span#student-count  (1pt)
    
        * Add an event listener so that when button#add-students is clicked:
            - Read the value from the student-name input, save in a variable. If the name is not entered, show an alert error message and return. (1pt)
            - Read the value from the student-id input, save in a variable. If the id is not entered, show an alert error message and return. (1pt)
            - Read the value from the student-gpa input, save in a variable. If the GPA is not entered, or is not in the range 0-4, show an alert error message and return.  (1pt)
            - Create a new li element (1pt)
            - Set the innerHTML of the li element to a string containing the student's name, id, and GPA  (1pt)
                for example "Beyonce Knowles, id: aa1234bb, GPA 3.8"
                Use a template string to generate this string
            - Add a click event handler to the new li element.  (3pt)
            - When the li element is clicked, add the class="selected" to that li element.
            - When that li element is clicked again, remove the class="selected" from that li element
                In other words, clicking a li element will toggle the selected class. https://www.w3schools.com/howto/howto_js_toggle_class.asp
            - Add the new li element to ul#student-list element (1pt)
            - Clear the values of the three input elements (1pt)
            - Update the span#student-count value to the new number of students (1pt)
    
        * Add an event listener so that when button#remove-selected-students is clicked:
            - Remove all of the elements with the class="selected" from the list.   (3pt)
            - Using the remove() function on an element will remove it. Example https://jsfiddle.net/rk9pm4vg/
        
        You should not need to modify any of the HTML. 
    */