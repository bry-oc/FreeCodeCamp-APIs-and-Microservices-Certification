import React from "react";

function Button(){
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    let getTimestamp = (e) => {
        e.preventDefault();
        let timestamp = e.target.timestamp.value;
        console.log(timestamp);
    }

    return(
        <div>
            <p>Timestamp Display: {!data ? "" : data}</p>
            <form id="timestampform" onSubmit={getTimestamp}>
                <label htmlFor="timestamp">Enter a timestamp. (See examples.)<br></br></label>
                <input type="text" id="timestamp" name="timestamp" defaultValue="timestamp examples"></input>
                {/*
                    onSubmit, take the timestamp and send to url/api/timestamp
                */}
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Button;