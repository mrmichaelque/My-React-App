import React from 'react';
import logo from 'client/public/logo.png';
import { ThemeProvider } from 'path-to-your-theme-provider'; // Adjust the path
import { createStackNavigator } from '@react-navigation/stack';

function SkillsStack() {
  return (
    <ThemeProvider>
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

        <CustomButton />
      </div>
    </ThemeProvider>
  );
}

function CustomButton() {
  return (
    <div className="button">
      <button>My Profile</button>
      <button>My Profile</button>
    </div>
  );
}

export default SkillsStack;
