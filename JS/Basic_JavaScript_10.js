function Call_loop() {
    var Digit = "";
    var X = 2;
    while (X < 51)  {
        Digit += "<br>" + X;
        X+=2;
    }
    document.getElementById("Counting_by_two").innerHTML = Digit;
}

function string_count() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("stringcount").innerHTML = n;
}


var Instruments = ["Guitar ", "Drums ", "Piano ", "Bass ", "Violin ", "Trumpet ", "Flute "];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<b>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

function array_Function() {
    var Fruit = [];
    Fruit[0] = "Strawberry's";
    Fruit[1] = "Banana's";
    Fruit[2] = "watermelon";
    Fruit[3] = "orange's";
    document.getElementById("Array").innerHTML = "My favorites fruits are " +
        Fruit[0] + " and " + Fruit[1] + ".";
}

function constant_function() {
    const smart_phone = {type:"iPhone", version:"10", brand:"Apple", color:"black"};
    smart_phone.version = "11 Pro";
    smart_phone.price = "$699";
    document.getElementById("Constant").innerHTML = " Come buy a new " + smart_phone.type + 
        smart_phone.version + " for just " +smart_phone.price + "!";

}


let employee = {
    name: "Jordan",
    date_hired: "01/31/2020",
    id_number: "24785",
    department: "IT",
    description : function() {
        return this.name + " was hired on " + this.date_hired + " for "  + this.department + ".";
        }
};
document.getElementById("employee_object").innerHTML = employee.description();



//var Y = 24;
//document.write(Y);
{
    let Y = 2;
    document.write("<br>" + Y);
}
//document.write("<br>" + Y);
