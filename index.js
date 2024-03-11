const students = [
    {firstname: 'Khushboo', lastname: 'Gupta', age: 22, gender: 'female', rollno: '073', dob:'2001-11-21', hobbies: 'Dancing, Singing', mobiledevice: 'Android'},
    {firstname: 'Ishaan', lastname: 'Joshi', age: 23, gender: 'male', rollno: '067', dob:'2001-03-10', hobbies: 'Reading, Writing', mobiledevice: 'iOS'},
];
var firstname = document.getElementById('firstname').value;
var lastname = document.getElementById('lastname').value;
var age = document.getElementById('age').value;
var gender = document.getElementById('gender').value;
var rollNo = document.getElementById('rollno').value;
var dob = document.getElementById('dob').value;
var hobbies = document.getElementById('hobbies').value;
var mobiledevice = document.getElementById('mobiledevice').value;



function validateForm(){
    if(!firstname || !lastname || !isNaN(age) || !gender || !rollno || !dob || !hobbies || !mobiledevice)
        alert("Please fill all the fields!!");
    else
        console.log("Form submitted!");
}
function getStudentDetails(){
    const rollno= (document.getElementById('rollno')).value;
    const student = students.find(s => s.rollno === rollno);
    if(student){
        console.log("Student details : ");
        console.log("First Name: ", student.firstname);
        console.log("Last Name: ", student.lastname);
        console.log("Age: ", student.age);
        console.log("Gender: ", student.gender);
        console.log("Roll No: ", student.rollno);
        console.log("Date of birth: ", student.dob);
        console.log("Hobbies: ", student.hobbies);
        console.log("Mobile Device: ", student.mobiledevice);
    }else{
        console.log("Student not found with this roll id: ", rollno);
    }
}

