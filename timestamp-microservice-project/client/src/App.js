import './App.css';
import Title from './components/title.js';
import Button from './components/button.js';
import ExampleUsage from './components/exampleusage.js';
import Welcome from './components/welcome.js';
//import UserStories from './components/userstories.js'

function App() {
  return (
    <div id="main" className="container main">
      < Title title="Timestamp Microservice" />
      < Welcome />
      < Button /> 
      < ExampleUsage />
    </div>
    
  );
}

export default App;
