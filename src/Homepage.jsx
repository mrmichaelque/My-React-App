import './App.css';
import Footer from './components/Footer.jsx'; // Assuming the correct path to your Footer component
import Header from './components/Header.jsx'; // Assuming the correct path to your Header component

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Welcome to My App</h1>
      <p>This is happening</p>
      {/* Additional content goes here */}
      <Footer />
    </div>
  );
}

export default App;
