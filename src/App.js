// This is the overall parent

import logo from './logo.svg';
import './App.css';
// Import the const
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Home is a Child component of App.js */}
        <Home />
      </header>
    </div>
  );
}


export default App;
