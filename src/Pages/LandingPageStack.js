import logo from 'client/public'; // Import or define the path to your logo
import Button from './components/Button.jsx'; // Corrected the import statement
import './styles/App.scss'; // Adjust the path to your styles

/**
 * Renders the main App component.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <div className="App">
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

      <Button /> {/* Render the Button component */}
    </div>
  );
}

// Correctly define the button function
function Button() {
  return (
    <div className="button">
      <button>My Profile</button>
      <button>My Profile</button>
    </div>
  );
}

export default App;