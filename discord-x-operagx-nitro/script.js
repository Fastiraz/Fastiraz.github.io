document.getElementById("genbutton").addEventListener("click", function () {
    var myHeaders = new Headers();
    myHeaders.append("authority", "api.discord.gx.games");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-US,en;q=0.9");
    myHeaders.append("content-type", "application/json");
    myHeaders.append("origin", "https://www.opera.com");
    myHeaders.append("referer", "https://www.opera.com/");
    myHeaders.append("sec-ch-ua", "\"Opera GX\";v=\"105\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "cross-site");
    myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 OPR/105.0.0.0");

    var raw = JSON.stringify({
        "partnerUserId": "bc385c68-be5f-43c2-9713-cb2051fef65b"
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://api.discord.gx.games/v1/direct-fulfillment", requestOptions)
        .then(response => response.text())
        .then(result => {
            document.getElementById("resultPlaceholder").textContent = result;
            console.log(result);
        })
        .catch(error => console.log('error', error));
});