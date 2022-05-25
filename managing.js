function manage() {
    var displaydiv = document.getElementById("display");
    var html = "";

    html += "Enter the name of your flight: <input type='text' id='managerinput'></input><br />";
    html += "<button onclick='manageSeat()'>Continue</button>";

    displaydiv.innerHTML = html;
}

function manageSeat() {
    var displaydiv = document.getElementById("display");
    var flight = document.getElementById("managerinput").value;
    var flightList = JSON.parse(localStorage.getItem("fdaflights"));
    var bookingsList = JSON.parse(localStorage.getItem("fdabookings"));
    var html = "";
    var verified = false;
    var flightIndex = 0;

    for (let i = 0; i < flightList.length; i++) {
        if (flightList[i].includes(flight)) {
            verified = true;
            flightIndex = i;
        }
    }

    if (verified) {
        html += "<table><tr>";
        html += "<th>Flight Name</th>";
        html += "<th>Date/Time</th>";
        html += "<th>Destination</th></tr>";

        html += "<tr><td>" + flightList[flightIndex][0] + "</td>";
        html += "<td>" + flightList[flightIndex][1] + "</td>";
        html += "<td>" + flightList[flightIndex][2] + "</td></tr></table><br />";

        html += "<table>";

        html += "<input type='number' id='indexmanager' value=" + flightIndex + " readonly /><br />";

        // dictates how many rows and columns are printed to the screen; ensure this matches whatever database is implemented.
        var rows = flightList[flightIndex][3];
        var columns = flightList[flightIndex][4];

        // this loop creates the header of the seat table
        html += "<tr><th></th>"; 
        for (let x = 0; x < columns; x++) {
            html += "<th>" + (x + 1) + "</th>";
        }
        html += "</tr>";

        for (let i = 0; i < rows; i++) {
            html += "<tr><th>" + (i + 1) + "</th>";

            for (let j = 0; j < columns; j++) {
                if (bookingsList[flightIndex].includes(String(i + 1) + String(j + 1))) {
                    html += "<td><img src='images/seat.png' style='background-color:coral;' /></td>";
                } else {
                    html += "<td><img src='images/seat.png' /></td>";
                }
            }

            html += "</tr>";
        }

        html += "</table><br /><br />";

        html += "Row: <input type='number' id='rowmanager'></input><br />";
        html += "Column: <input type='number' id='columnmanager'></input><br />";
        html += "<button onclick='cancel()'>Cancel Seat</button>";
    }

    displaydiv.innerHTML = html;
}

function cancel() {
    var row = document.getElementById("rowmanager").value;
    var column = document.getElementById("columnmanager").value;
    var bookingsList = JSON.parse(localStorage.getItem("fdabookings"));
    var flightIndex = document.getElementById("indexmanager").value;

    if (bookingsList[flightIndex].includes(String(row) + String(column))) {
        if (confirm("Do you want to cancel your flight?")) {
            for (let i = 0; i < bookingsList[flightIndex].length; i++) {
                if (bookingsList[flightIndex][i] == (String(row) + String(column))) {
                    delete bookingsList[flightIndex][i];
                }
            }

            localStorage.setItem("fdabookings", JSON.stringify(bookingsList));
        }
    } else {
        alert("Seat not booked");
    }

    document.getElementById("display").innerHTML = "";
}
