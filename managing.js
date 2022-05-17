function manage() {
    var displaydiv = document.getElementById("display");
    var html = "";

    html += "Enter the number of your flight: <input type='number' id='managerinput'></input><br />";
    html += "<button onclick='manageSeat()'>Continue</button>";

    displaydiv.innerHTML = html;
}

function manageSeat() {
    var displaydiv = document.getElementById("display");
    var html = "This is a stub. This section needs to be updated when database functionality is implemented.";

    displaydiv.innerHTML = html;
}
