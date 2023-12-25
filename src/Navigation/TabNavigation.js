import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Import your stack components
import ExploreEngageStack from './ExploreEngageStack';
import LiveLearnStack from './LiveLearnStack';
import DesignDocumentationStack from './DesignDocumentationStack';
import MyProfileStack from './MyProfileStack';
import { useTheme } from '../context/ThemeContext';
import { getTabBarOptions } from './navigation.options';
import { 
  LandingPage,
  ProfileHome, 
  ProjectHome,
  ExploreEngageStack,
  LiveLearnStack,
  DesignDocumentationStack,
  SearchScreen,
} from './index';
  const Tab = createMaterialTopTabNavigator();
  const { theme } = useTheme();
  const tabBarOptions = getTabBarOptions(theme);
  const getIcon = (routeName, isFocused) => {
    let icon;
    switch (routeName) {
      case 'Settings':
        icon = 'settings';
        break;
      default:
        icon = 'md-square';
    }
    if (!isFocused) {
      icon = icon.concat('-outline');
    }
    return icon;
  };

  return (
    <Tab.Navigator
      initialRouteName="ExploreEngageStack"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          const iconName = getIcon(route.name, focused);
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={tabBarOptions}
    >
      <Tab.Screen name="Explore & Engage" component={ExploreEngageStack} />
      <Tab.Screen name="Living & Learning" component={LiveLearnStack} />
      <Tab.Screen name="Design & Documentation" component={DesignDocumentationStack} />
      <Tab.Screen name="My Profile" component={MyProfileStack} />
    </Tab.Navigator>
  );
export default TabNavigation