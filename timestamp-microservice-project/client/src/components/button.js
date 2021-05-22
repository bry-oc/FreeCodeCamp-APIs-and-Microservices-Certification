import React from "react";

function Button(){
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);
    
    return(
        <div>
            <p>Timestamp Display: {!data ? "" : data}</p>
            <form>
                <label for="timestamp">Enter a timestamp. (See examples.)<br></br></label>
                <input type="text" id="timestamp" name="timestamp" value="timestamp examples"></input>
                {/*
                    onSubmit, take the timestamp and send to url/api/timestamp
                */}
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Button;