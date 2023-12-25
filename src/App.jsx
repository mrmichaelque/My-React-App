import React, { Component } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Div, StyleReset, ThemeProvider } from "atomize";
import { TabNavigation, Footer, getScreenOptions } from './Containers';
// Remove the duplicate import below
// import { getStyles } from './app.styles';
import default Router from {'Router}

ReactDOM.createRoot(document.getElementById('root')).render(
const engine = new Styletron();
const theme = {
  colors: {
    black900: "#1d1d1e"
  }};

const styles = getStyles(theme); // Call the getStyles function with the theme

class App extends Component {
  render() {
    return (
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
          <StyleReset />
          <Div
            style={styles.container}
          >
            {/* Your content goes here */}
          </Div>
        </ThemeProvider>
      </StyletronProvider>
    );
  }
}

export default App;