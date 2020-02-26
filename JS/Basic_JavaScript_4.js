function my_Dictionary() {
    var Football = {
        Divisions:"A , B , C",
        Formats:"8vs8 , 5vs5",
        Teams:"12 , 32",
        delete Football.Teams;
    };
    delete Football.Teams;
    document.getElementById("Dictionary").innerHTML = Football.Teams
}
