function my_Dictionary() {
    var Football = {
        Divisions:"A , B , C",
        Formats:"8vs8 , 5vs5",
        Teams:"12 , 32",
    };
    document.getElementById("Dictionary").innerHTML = Football.Teams
}

delete Football.Teams:;