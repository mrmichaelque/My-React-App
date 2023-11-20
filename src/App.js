import React from 'react';
import 'styles/App.scss';
import MyFooter from './components/Footer.js'; // Renamed the imported Footer component
import Header from './components/Header.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    fetch("http://localhost:3000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  render() {
    return (
      <div>
        <Header />
        <p>{this.state.apiResponse}</p>
        <p>My App</p>
        <MyFooter /> {/* Use the renamed component here */}
      </div>
    );
  }
}

function Footer() {
  return (
    <div>
      {/* Footer content goes here */}
    </div>
  );
}

export default App;
