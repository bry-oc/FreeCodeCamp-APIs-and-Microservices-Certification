import Header from './header.js'

function ExampleUsage(){
    return(
        <div id="exampleusage" className="container">
            < Header headerTitle="Example Usage: Accepted Formats"/>
            <p>You may enter any of the following formats into the above input or attached to the server-url<br></br>(e.g. server-url/api/&lt;timestamp&gt; where &lt;timestamp&gt; is replaced by your timestamp.)</p>
            <h3>Conventional Language</h3>
            <ul>
                <li>Enter a date following YYYY-MM-DD format (e.g. 2021-01-02 or server-url/api/2021-01-02)</li>
                <li>Any string containing, a year, a month(numbered or named), and a day</li>
            </ul>
            <h3>Unix Timestamps</h3>
            <p>You may enter any number as a Unix timestamp in milliseconds.  <br></br>Unix time is the number of seconds that have elapsed since the Unix epoch, minus leap seconds.<br></br>The Unix epoch is 00:00:00 UTC on 1 January 1970.</p>
            <h3>Example Output: </h3>
            <p>unix: 1607990400000, utc: Tue, 15 Dec 2020 00:00:00 GMT</p>
        </div>
    )
}

export default ExampleUsage;