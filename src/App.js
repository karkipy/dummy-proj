import logo from './logo.svg';
import './App.css';
import { ContextExample } from './contextExample/ContextExample';
import { ReduxExample } from './reduxExample/ReduxExample';


function App() {
  return (
    <div className="App">
      <div className='app-container'>
       <h1>Using Context</h1>
        <ContextExample />
      </div>
      <div className='app-container'>
        <h1>Using Redux</h1>
        <ReduxExample />
      </div>
    </div>
  );
}

export default App;
