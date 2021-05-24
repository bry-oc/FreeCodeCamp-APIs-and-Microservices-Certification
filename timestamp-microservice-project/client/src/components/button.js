import React from "react";

function Button(){
    const [utc, setUTC] = React.useState(null);
    const [unix, setUNIX] = React.useState(null);

    let getTimestamp = (e) => {
        e.preventDefault();
        let timestamp = e.target.timestamp.value;
        fetch("/api/" + timestamp)
            .then((res) => res.json())
            .then((data) => {
                if(!data.error){
                    setUTC(data.utc);
                    setUNIX(data.unix);
                }else {
                    setUTC("Invalid");
                    setUNIX("Invalid");
                }                
            });
    }
    

    return(
        <div className="container timeDisplay">
            <form id="timestampform" onSubmit={getTimestamp}>
                <label htmlFor="timestamp"><b>Please enter a timestamp. (See examples.)</b><br></br><br></br></label>
                <input type="text" id="timestamp" name="timestamp" defaultValue=""></input>
                {/*
                    onSubmit, take the timestamp and send to url/api/timestamp
                */}
                <input type="submit" value="Submit"></input>
            </form>
            <p>unix: {!unix ? "None" : unix}, utc: {!utc ? "None" : utc} </p>
        </div>
    );
}

export default Button;