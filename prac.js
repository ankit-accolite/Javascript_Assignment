/*window.document.onload = function()
    {
        alert("Welcome to The Form");
    }();
*/
window.addEventListener("DOMContentLoaded",(event) => 
{
    alert("Welcome to the Page");
});

function getValues()
{
var rno = document.getElementById("rno").value;
var fname = document.getElementById("fnm").value;
var lname = document.getElementById("lnm").value;
var dob = document.getElementById("dob").value;
var hob = document.getElementById("hob").value;
var gender = document.getElementById("gender").value;

alert("Roll No is : "+rno+"\nFirst Name is : "+fname+"\nLast Name is : "+lname+"\nDOB is : "+dob+"\nGender : "+gender+"\nHobbies : "+hob);

}