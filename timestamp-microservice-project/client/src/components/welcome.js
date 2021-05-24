function Welcome(){
    return(
        <div className="container welcome">
            <hr></hr>
            <p><b>Welcome! </b>This is a site setup to display the UTC time and Unix timestamp of a given date.  You may enter a date below and have it display on this webpage and you can also send a request to our server to see the response (serverurl/api/&lt;date&gt;, where &lt;date&gt; is replaced by your given date). You may also enter nothing and you will recieve the UTC time and Unix timestamp of the current time.</p>
            <hr></hr>
        </div>
    );
}
export default Welcome;