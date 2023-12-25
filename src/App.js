import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { createBrowserRouter, RouterProvider, useTheme } from "react-router-dom";
import { View } from "react-native";
import { ThemeProvider, StyleReset, Div } from "some-library";
import { CustomThemeProvider } from "another-library";
import TabNavigation from "./TabNavigation";
import { TransitionProvider } from "./context/TransitionContext";
import TransitionComponent from "./components/Transition";
import ProfileHomeStack from "./Profile-Pages/ProfileHomeStack"; // Adjusted import path
import Experience from "./Profile-Pages/Experience"; // Adjusted import path
import Skills from "./Profile-Pages/Skill"; // Adjusted import path
import Crededentials from "./Containers/Crededentials"; // Adjusted import path
import AboutMe from "./Containers/AboutMe"; // Adjusted import path

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();

const theme = {
  colors: {
    black900: "#1d1d1e",
  },
};

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  // Add more routes here
]);

class App extends Component {
  render() {
    return (
      <TransitionComponent>
        <StyletronProvider value={engine} debug={debug} debugAfterHydration>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <CustomThemeProvider>
              <ThemeProvider theme={theme}>
                <StyleReset />
                <Div>
                  {/* Your content goes here */}
                  Start from here
                </Div>
              </ThemeProvider>
            </CustomThemeProvider>
          </View>
        </StyletronProvider>
      </TransitionComponent>
    );
  }
}

export default App;

const Home = () => {
  const theme = useTheme();
  return (
    <TransitionComponent>
      <div style={{ color: theme.colors.black900 }}>
        <h1>Home</h1>
        <FakeText />
      </div>
    </TransitionComponent>
  );
};

const FakeText = () => {
  const theme = useTheme();
  return (
    <p style={{ color: theme.colors.black900 }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
