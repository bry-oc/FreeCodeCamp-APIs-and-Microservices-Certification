import './App.css';
import Title from './components/title.js';
import Button from './components/button.js';
import Header from './components/header.js';

function App() {
  return (
    <div id="main">
      < Title title="Timestamp Microservice" />
      < Button buttonId="submit"/> 
    </div>
    
  );
}

export default App;
