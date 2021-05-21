function Button(){
    return(
        <div>
            <p>Timestamp Display</p>
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