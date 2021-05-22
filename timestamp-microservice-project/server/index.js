const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


function createTimestamp(timestamp){
    let unixSeconds = timestamp === undefined ? Date.now() : timestamp;
    //console.log(unixSeconds);
    let unixTime = new Date(unixSeconds);
    let weekday = days[unixTime.getUTCDay()];
    let day = unixTime.getUTCDate() > 9 ? unixTime.getUTCDate() : "0" + unixTime.getUTCDate();
    let month = months[unixTime.getUTCMonth()];
    let year = unixTime.getUTCFullYear();
    let hour = unixTime.getUTCHours() > 9 ? unixTime.getUTCHours() : "0" + unixTime.getUTCHours();
    let minutes = unixTime.getUTCMinutes() > 9 ? unixTime.getUTCMinutes() : "0" + unixTime.getUTCMinutes();
    let seconds = unixTime.getUTCSeconds() > 9 ? unixTime.getUTCSeconds() : "0" + unixTime.getUTCSeconds();
    let utcTime =  weekday + ", " + day + " " + month + " " + year + " " + hour + ":" + minutes + ":" + seconds + " GMT"; 
    //console.log({unix: unixSeconds, utc: utcTime})
    return {unix: unixSeconds, utc: utcTime};
}

//given format yyyy-mm-dd
//if valid.month and month are not equal 
//then the days rolled over into a new month
//therefore invalid
function isValidDate(date) {
    let splitDate = date.split("-");
    let year = splitDate[0];
    let month = splitDate[1];
    let day = splitDate[2];
    let valid = new Date(year, month - 1, day);
    return date && (valid.getMonth() + 1) === parseInt(month);
}

app.get("/api/:date?", function(req, res){
    if(req.params.date === undefined){
        //send the current timestamp in unix and utc format
        let timestampResult = createTimestamp();
        res.json(timestampResult);
        //res.json({unix: unixSeconds, utc: utcTime});
    } else {
        //make sure the date is a valid format and send the timestamp in unix and utc format
        let timestamp = req.params.date;
        //console.log("timestamp: " + timestamp);
        let utcRegex = /^\d{4}-\d{2}-\d{2}$/;
        let unixRegex = /^\d+$/
        if(utcRegex.test(timestamp)){
            //get the year, month, day from the string
            //console.log("utc!!!")
            //ensure the date is valid
            //console.log(isValidDate(timestamp));
            if(isValidDate(timestamp)){
                let utcYear = timestamp.slice(0, 4);
                let utcMonth = timestamp.slice(5,7);
                let utcDay = timestamp.slice(8, 10);
                let utcDate = new Date(utcYear, utcMonth - 1, utcDay);
                utcDate.setUTCHours(0, 0, 0, 0);
                let unixTimestamp = utcDate.getTime();
                let timestampResult = createTimestamp(unixTimestamp);
                res.json(timestampResult);
            } else {
                res.json({error: "Invalid Date"});
            }
        } else if (unixRegex.test(timestamp)){
            //console.log("unix!!!");
            let timestampResult = createTimestamp(parseInt(timestamp));
            res.json(timestampResult);
        } else {
            let timestamp = req.params.date;
            let utcDate = new Date(timestamp);
            if(utcDate != "Invalid Date"){
                utcDate.setUTCHours(0, 0, 0, 0);
                let unixTimestamp = utcDate.getTime();
                //console.log(typeof(unixTimestamp));
                let timestampResult = createTimestamp(unixTimestamp);
                res.json(timestampResult);
            } else {
                res.json({error: "Invalid Date"});
            }            
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});