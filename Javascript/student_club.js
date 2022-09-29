 // Variables
 let studentCount = document.querySelector('#student-count')
 let studentName = document.querySelector('#student-name')
 let studentID = document.querySelector('#student-id')
 let studentGPA = document.querySelector('#student-gpa')
 let studentList = document.querySelector('#student-list')
 let addStudent = document.querySelector('#add-student')
 let studentsInList = 0
 let parentElement = document.body;

 let removeSelectedStudents = document.querySelector('#remove-selected-students')
 // Using JavaScript, display 0 in the span#student-count
 studentCount.innerHTML = studentsInList

 // Event listener for the saveButton
 addStudent.addEventListener('click', function() {
     // Reads the text in the input
     let studentNameText = studentName.value
     let studentIDText = studentID.value
     let studentGPAText = studentGPA.value

     // validation
     if (studentNameText == '') {
         alert('Enter a name.')
         return
     }

     if (studentIDText == '') {
         alert('Enter your Student ID.')
         return
     }

     if (studentGPAText < 0 || studentGPAText > 4) {
         alert('Please enter a GPA in the range of 0 - 4')
         return
     }

     // Create a new li item
     let listItem = document.createElement('li')
     // use template string to generate string of name, id: , GPA
     listItem.innerHTML = `${studentNameText}, ID: ${studentIDText}, GPA ${studentGPAText}`

     // add event listener to listItem, if clicked toggle class="selected"
     listItem.addEventListener("click", function() {
         listItem.classList.toggle("selected")
     });
     studentList.appendChild(listItem)

     // Clears the text in the input
     studentName.value = ''
     studentID.value = ''
     studentGPA.value = ''

     // Adds to the counter
     studentsInList++

     // Updates the InnerHTML
     studentCount.innerHTML = studentsInList
 })


 // Add an event listener so that when button#remove-selected-students is clicked: Remove all of the elements with the class="selected" from the list.
 removeSelectedStudents.addEventListener('click', function() {
     let elementsToDelete = document.querySelectorAll('.selected')
     elementsToDelete.forEach(function(element) {
         element.remove()
     })
 });