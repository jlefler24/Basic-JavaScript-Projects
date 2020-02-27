function vh_weight() {
    Weight = document.getElementById("Weight").value;
    if (Weight >= 1000) {
        Weighin = "To heavy";
    }
    else {
        Weighin = "Under weight limit";
    }
    document.getElementById("Vehicle_Weight?").innerHTML = Weighin;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
        document.getElementById("Time_of_Day").innerHTML= Reply;
}





// HOURS IF STATEMENTS
function myFunction() {
    var time = new Date().getHours();
    if (time < 6) {
        document.getElementById("Greeting").innerHTML = "Good Morning!";
    }
}

var x = 8;
function Add_numbers_1() {
    document.write(22 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 92);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_3() {
    var A = 20;
    document.write(4 + A + "<br>");
}
function Add_numbers_4() {
    document.write(A + 50);
    }
Add_numbers_3();
Add_numbers_4();


function Add_numbers_5() {
    var C = 10;
    console.log(15 + C);
}
function Add_numbers_6() {
    console.log(C + 100);
}
Add_numbers_5();
Add_numbers_6();