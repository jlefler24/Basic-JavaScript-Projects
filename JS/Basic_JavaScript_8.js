function my_sentence() {
    var p1 = "So far ";
    var p2 = "the Tech Academy ";
    var p3 = "has been ";
    var p4 = "good.";
    var complete_sentence = p1.concat(p2, p3, p4);
    document.getElementById("sentence1").innerHTML = complete_sentence;

}

function slice_Method() {
    var sentence = "All life is problem solving."
    var section = sentence.slice(12,27);
    document.getElementById("Slice").innerHTML = section;

}

function up_case() {
    var str = "Good Evening!";
    var res = str.toUpperCase();
    document.getElementById("case").innerHTML = res;
}

function my_search() {
    var str = "I'm attending The Tech Academy.";
    var n = str.search("Academy");
    document.getElementById("Tech").innerHTML = n;
}

function string_Method() {
    var x = 120;
    document.getElementById("Number_to_string").innerHTML = x.toString();
}

function precision_Method() {
    var y = 22448.458755
    document.getElementById("Precision").innerHTML = y.toPrecision(7)
}


function to_fixed() {
    var num = 8.78791;
    var n = num.toFixed(3);
    document.getElementById("fixed").innerHTML = n;
}

function my_value() {
    var str = "HELLO WORLD!";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;
}