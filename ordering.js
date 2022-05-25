function order() {
    var displaydiv = document.getElementById("display");
    var html = "";// contains the html code that will be shown in the display div in the driver.
    let output = JSON.parse(localStorage.getItem("fdamenu"));

    html += "<table><tr><th></th>";
    html += "<th>Item Name</th>";
    html += "<th>Price</th></tr>";
    
    for(let i = 0; i < output.length; i++) {
        html += "<tr><th>" + (i + 1) + "</th>";
        for(let j = 0; j < output[i].length; j++) {
            html += "<Td>" + output[i][j] + "</td>";
        }
        html += "</tr>";
    }

    html += "</table><br />";

    html += "Item Number: <input type='number' id='iteminput'></input><br />";
    html += "<button onclick='sendOrder()'>Order</button><br /><br />";

    displaydiv.innerHTML = html;
}

function sendOrder() {
    let input = document.getElementById("iteminput");
    console.log("Order placed for Item#" + input.value);
    // in production, this should send an alert to the staff on the customer's flight
    
    document.getElementById("display").innerHTML = "";
}
