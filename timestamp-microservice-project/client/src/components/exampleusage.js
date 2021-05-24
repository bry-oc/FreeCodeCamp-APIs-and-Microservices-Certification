import Header from './header.js'

function ExampleUsage(){
    return(
        <div id="exampleusage" className="container exampleUsage">
            <hr></hr>
            < Header headerTitle="Example Usage: Accepted Formats"/>
            <h3>Coordinated Universal Time (UTC)</h3>
            <p>UTC is the primary time standard used across the world.  It is within one second of mean solar time at 0(dg) longitude and does not adjust for daylight saving time.  Greenwich Mean Time is the time zone where the UTC standard is measured.</p>
            <ul>
                <li>Enter a date following YYYY-MM-DD format (e.g. 2021-01-02 or server-url/api/2021-01-02)</li>
                <li>Any string containing, a year, a month(numbered or named), and a day</li>
            </ul>
            <h3>Unix Timestamps</h3>
            <p>You may enter any number as a Unix timestamp in milliseconds.  Unix time is the number of seconds that have elapsed since the Unix epoch, minus leap seconds.  The Unix epoch is 00:00:00 UTC on 1 January 1970.</p>
            <h3>Example Output: </h3>
            <p>unix: 1607990400000, utc: Tue, 15 Dec 2020 00:00:00 GMT</p>
        </div>
    )
}

export default ExampleUsage;