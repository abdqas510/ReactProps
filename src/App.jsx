import logo from './logo.svg';
import './App.css';
import Greetings from './Components/Navbar.js';
import GreetingsClass from './Components/Footer.js';
function App() {
  const name = "Abd"
  const massege = "Hello"
  return (
    <div className="App">
      <nav>
      <Greetings name={name} massege={massege}/>
      </nav>
      
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GreetingsClass name={name} massege = {massege}/>
    </div>
  );
}

export default App;
