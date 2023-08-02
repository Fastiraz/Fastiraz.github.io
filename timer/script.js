(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "08/22/",
        date = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > date) {
        date = dayMonth + nextYear;
    }
    //end

    // Set the target end date to the desired date and 08:00 hours
    let endDateTime = new Date(date);
    endDateTime.setHours(8, 0, 0, 0); // 08:00 hours

    const countDown = endDateTime.getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when the date is reached
            if (distance < 0) {
                document.getElementById("headline").innerText = "It's time!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
            //seconds
        }, 0);
}());
