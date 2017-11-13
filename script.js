function openCity(cityName, elmnt, color) {
    var i, tabcontent, focus;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    focus = document.getElementsByClassName("tablink");
    for (i = 0; i < focus.length; i++) {
        focus[i].style.backgroundColor = "";
    }

    document.getElementById(cityName).style.display = "block";

    elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();