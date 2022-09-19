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
if (studentNameText  == '' ){
    alert('Enter a name.')
    return
  }

  if (studentIDText  == '' ){
    alert('Enter your Student ID.')
    return
  }

  if (studentGPAText  >= 4 ){
    alert('GPA range has to be between 0-4.')
    return
  }

// Create a new li item
let listItem = document.createElement('li')
// The li element text should be the text from the input
listItem.innerHTML = ' ' + studentNameText + ' ID: ' + studentIDText + ' GPA: ' + studentGPAText
// Add the new li element as a child of the ul element
studentList.appendChild(listItem)
// Clears the text in the input
studentName.value = ''
studentID.value = ''
studentGPA.value = ''
// Adds to the counter
studentsInList++
// Sets the new li element's 
listItem.setAttribute('onclick', 'selectToggle()')
})

 function selectToggle()
{
  if ( studentList.className == '')
  {
    studentList.setAttribute("class", "selected"); 
  }
  else
  {
    studentList.setAttribute("class", ""); 
  }
}
// listItem.addEventListener('click', function(){


//     listItem.classList.add("selected");
// })
 
 // function addSelected() {
 
 //   console.log('this list item is selected')
 //   console.log(studentList.innerHTML)
 
 //   if (studentList.innerHTML.classname == "selected") {
 //     classList.remove("selected");
 //   } else {
 //     studentList.innerHTML.classList.add("selected");
 //   }
   
 // }
 
  // studentList.addEventListener('click', function () {
  //   studentList.classList.toggle('selected')
  //  });
 
  removeSelectedStudents.addEventListener('click', function () {
   let elementsToDelete = document.querySelectorAll('.selected')
   elementsToDelete.forEach( function(element) {
     element.remove()
   })
  });