function Ride_Function() {
    var Height, can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


function Vote_Function() {
    var Age, can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to":"You can";
    document.getElementById("Vote").innerHTML = Can_vote + " vote.";
}


function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}


function Student(Age, Gender, Major, Email) {
    this.Student_Age = Age;
    this.Student_Gender = Gender;
    this.Student_Major = Major;
    this.Student_Email = Email;
}
var Jordan = new Student(29, "Male", "Computer Science", "yahoo.com");
var Austin = new Student(27, "Male", "Accounting", "aol.com");
var Ciara = new Student(19, "Female", "English", "gmail.com");
function myFunction24() {
    document.getElementById("Students_1").innerHTML = 
    "Jordan is a new student " + Jordan.Student_Age + " year old " + Jordan.Student_Gender + " Majoring in " + 
    Jordan.Student_Major;
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count ();
    function Count () {
        var Starting_point = 20;
        function Plus_four() {Starting_point += 4;}
        Plus_four();
        return Starting_point;
    }
}