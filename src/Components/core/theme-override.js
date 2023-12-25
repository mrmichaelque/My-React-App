const theme = {
  colors: {
    // Overwriting existing brand colors
    brand100: "#F9F8FC",
    brand200: "#F3F1FA",
    // ... (other shades)
    brand900: "#382683",
  }
};

const BrandColors = () => (
  <ThemeProvider theme={theme}>
    {/* Render color shades using the modified theme */}
  </ThemeProvider>
);
  shadows: {
    // Adding a new shadow
    "new-shadow": "0 16px 24px -2px rgba(0, 0, 0, 0.08)"
  }
};
const theme = {
  shadows: {
    // Adding a new shadow
    "new-shadow": "0 16px 24px -2px rgba(0, 0, 0, 0.08)"
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* Render an element with the new shadow */}
  </ThemeProvider>,
  mountNode
);
const theme = {
  fontFamily: {
    // Changing the secondary font
    primary: "Noto Sans",
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Text fontFamily="secondary" textSize="heading">
      This is a different font
    </Text>
  </ThemeProvider>,
  mountNode
);


