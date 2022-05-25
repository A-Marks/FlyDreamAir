function book() {
    var displaydiv = document.getElementById("display");
    var html = "";// contains the html code that will be shown in the display div in the driver.
    var output = JSON.parse(localStorage.getItem("fdaflights"));

    html += "<table><tr>";
    html += "<th>Flight Name</th>";
    html += "<th>Date/Time</th>";
    html += "<th>Destination</th></tr>";

    for(let i = 0; i < output.length; i++) {
        html += "<tr>";
        for(let j = 0; j < (output[i].length - 2); j++) {
            html += "<Td>" + output[i][j] + "</td>";
        }
        html += "</tr>";
    }

    html += "</table><br />";

    html += "Flight Name: <input type='text' id='flightinput'></input><br />";
    html += "<button onclick='selectSeat()'>Continue</button><br /><br />";

    displaydiv.innerHTML = html;
}

function selectSeat() {
    var flight = document.getElementById("flightinput").value;
    var flightList = JSON.parse(localStorage.getItem("fdaflights"));
    var verified = false;
    var flightIndex = 0;

    for (let i = 0; i < flightList.length; i++) {
        if (flightList[i].includes(flight)) {
            verified = true;
            flightIndex = i;
        }
    }

    if (verified) {
        var displaydiv = document.getElementById("display");
        var html = ""; // contains the html code that will be shown in the display div in the driver.
        var bookingsList = JSON.parse(localStorage.getItem("fdabookings"));

        html += "<input type='number' id='indexfield' value=" + flightIndex + " readonly />";
        html += "<table>";

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

        html += "Row: <input type='number' id='rowinput'></input><br />";
        html += "Column: <input type='number' id='columninput'></input><br />";
        html += "<button onclick='submit()'>Book Seat</button>";

        displaydiv.innerHTML = html;
    }
}

function submit() {
    var row = document.getElementById("rowinput").value;
    var column = document.getElementById("columninput").value;
    var bookingsList = JSON.parse(localStorage.getItem("fdabookings"));
    var flightIndex = document.getElementById("indexfield").value;

    if (bookingsList[flightIndex].includes(String(row) + String(column))) {
        alert("Seat already booked");
    } else {
        bookingsList[flightIndex].push(String(row) + String(column));
        localStorage.setItem("fdabookings", JSON.stringify(bookingsList));
    }

    document.getElementById("display").innerHTML = "";
}
