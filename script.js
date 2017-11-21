function openCity(evt, cityName) {
    var i, tablinks;

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i<tablinks.length; i++) {
        tablinks[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}