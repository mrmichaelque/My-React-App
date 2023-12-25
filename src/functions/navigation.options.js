// Assuming there is a theme object with appropriate colors in the ../themes/types file

// Tab bar options
export const getTabBarOptions = (theme) => ({
  activeTintColor: theme.colors.primary,
  inactiveTintColor: theme.colors.text,
  activeBackgroundColor: theme.colors.background,
  inactiveBackgroundColor: theme.colors.background,
  style: {
    backgroundColor: theme.colors.border,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
});

// Screen options
export const getScreenOptions = (theme) => ({
  headerStyle: {
    backgroundColor: theme.colors.background,
  },
  headerTintColor: theme.colors.text,
});
