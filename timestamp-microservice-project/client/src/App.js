import './App.css';
import Title from './components/title.js';
import Button from './components/button.js';
import ExampleUsage from './components/exampleusage.js';
//import UserStories from './components/userstories.js'

function App() {
  return (
    <div id="main">
      < Title title="Timestamp Microservice" />
      < Button /> 
      < ExampleUsage />
    </div>
    
  );
}

export default App;
