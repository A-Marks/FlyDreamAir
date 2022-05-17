function order() {
    var displaydiv = document.getElementById("display");
    var html = "";// contains the html code that will be shown in the display div in the driver.

    html += "<table><tr><th></th>";
    html += "<th>Item Name</th>";
    html += "<th>Price</th></tr>";
    
    // example items; final menu unknown
    html += "<tr><td>1</td><td>Tomato Soup</td><td>$6.00</td></tr>";
    html += "<tr><td>2</td><td>Bag of Peanuts</td><td>$2.00</td></tr>";
    html += "<tr><td>3</td><td>Midori Sour</td><td>$6.49</td></tr>";
    html += "</table><br />";

    html += "Item Number: <input type='number' id='iteminput'></input><br />";
    html += "<button onclick='sendOrder()'>Order</button><br /><br />";

    displaydiv.innerHTML = html;
}

function sendOrder() {
    console.log("Order placed.");
    // in production, this should send an alert to the staff on the customer's flight
}
