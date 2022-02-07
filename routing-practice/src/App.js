
import './App.css';
import { Router } from '@reach/router'
import Main from './components/Main';
import Display from './components/Display';
import DisplayWithColor from './components/DisplayWithColor'



function App() {
  
  
  return (
    
    <div className="App">
      <Router>
        
        <Main  path="/home" />
        
        <Display  path="/:thing"/>
        
        <DisplayWithColor path="/:word/:textColor/:bkgdColor" />


      </Router>




    </div>
  );
}

export default App;
