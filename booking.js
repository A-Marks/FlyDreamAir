function book() {
    var displaydiv = document.getElementById("display");
    var html = "";// contains the html code that will be shown in the display div in the driver.

    html += "<table><tr>";
    html += "<th>Flight Name</th>";
    html += "<th>Date/Time</th>";
    html += "<th>Destination</th></tr>";

    // this block of code constructs the table of available flights; the current implementation is static, and will be changed when the database is integrated
    html += "<tr><td>FlyDreamAir #3170</td><td>26-06-2022/10:00</td><td>Melbourne</td></tr>";
    html += "<tr><td>FlyDreamAir #3171</td><td>26-06-2022/12:00</td><td>Sydney</td></tr>";
    html += "</table><br />";

    html += "Flight Number: <input type='number' id='flightinput'></input><br />";
    html += "<button onclick='selectSeat()'>Continue</button><br /><br />";

    displaydiv.innerHTML = html;
}

function selectSeat() {
    var displaydiv = document.getElementById("display");
    var html = ""; // contains the html code that will be shown in the display div in the driver.

    html += "<table>";

    // dictates how many rows and columns are printed to the screen; ensure this matches whatever database is implemented.
    var rows = 8;
    var columns = 6;

    // this loop creates the header of the seat table
    html += "<tr><th></th>"; 
    for (let x = 0; x < columns; x++) {
        html += "<th>" + (x + 1) + "</th>";
    }
    html += "</tr>"

    for (let i = 0; i < rows; i++) {
        html += "<tr><th>" + (i + 1) + "</th>";

        for (let j = 0; j < columns; j++) {
            html += "<td><img src='images/seat.png' /></td>";
        }

        html += "</tr>";
    }

    html += "</table><br /><br />";

    html += "Row: <input type='number' id='rowinput'></input><br />";
    html += "Column: <input type='number' id='columninput'></input><br />";
    html += "<button onclick='submit()'>Book Seat</button>"

    displaydiv.innerHTML = html;
}

function submit() {
    alert("This is a stub. Expand this function when persistent data storage is implemented.");
}
