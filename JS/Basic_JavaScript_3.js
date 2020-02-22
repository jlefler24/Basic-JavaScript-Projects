function addition_Function() {
    var Addition = 20 + 4;
    document.getElementById("Math").innerHTML = "20 + 4 = " + Addition;
}

function subtraction_Function() {
    var Subtraction = 8 - 3;
    document.getElementById("Math").innerHTML = "8 - 3 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 8 * 3;
    document.getElementById("Math").innerHTML = "8 x 3 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 2;
    document.getElementById("Math").innerHTML = "48 / 2 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 8;
    document.getElementById("Math").innerHTML = -x;
}

var k = 5;
k++;
document.write(k);

var j = 5.25;
j--;
document.write(j);

window.alert(Math.random());

window.alert(Math.random() * 100);


Math.random();

Math.sqrt(24); 