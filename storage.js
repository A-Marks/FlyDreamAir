function initialise() {
    const flights = [];
    flights.push(["FlyDreamAir #3170", "26-06-2022/10:00", "Melbourne", 8, 6]);
    flights.push(["FlyDreamAir #3171", "26-06-2022/12:00", "Sydney", 8, 6]);
    flights.push(["FlyDreamAir #3172", "27-06-2022/15:00", "Melbourne", 8, 6]);
    flights.push(["FlyDreamAir #3173", "27-06-2022/15:15", "Brisbane", 8, 6]);
    flights.push(["FlyDreamAir #3174", "27-06-2022/17:00", "Adelaide", 12, 8]);
    flights.push(["FlyDreamAir #3175", "28-06-2022/8:30", "Melbourne", 8, 6]);
    localStorage.setItem("fdaflights", JSON.stringify(flights));

    const menu = [];
    menu.push(["Tomato Soup", "$6.00"]);
    menu.push(["Bag of Peanuts", "$2.00"]);
    menu.push(["Midori Sour", "$6.49"]);
    menu.push(["Crab Bisque", "$10.50"]);
    menu.push(["Aubergine Parmigiana", "$7.00"]);
    menu.push(["Water", "$1.30"]);
    menu.push(["Breadsticks", "$2.00"]);
    localStorage.setItem("fdamenu", JSON.stringify(menu));

    const bookings = [];
    localStorage.setItem("fdabookings", JSON.stringify(bookings));
}

function purge() {
    localStorage.removeItem("fdaflights");
    localStorage.removeItem("fdamenu");
    localStorage.removeItem("fdabookings");
}
