import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TabNavigation } from './TabNavigation';
import DetailScreen from './src/pages/DetailScreen'; // Adjust the path accordingly
import { getScreenOptions } from './src/pages/navigation.options'; // Adjust the path accordingly
import { Div, Text, Button } from 'atomize';
import { createStackNavigator } from '@react-navigation/stack'; // Adjust the import accordingly

const Stack = createStackNavigator();

const ProjectHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={getScreenOptions()}>
      <Stack.Screen
        name="ProjectHomeStack"
        component={DetailScreen}
        options={{ title: 'ProjectHomeStack' }}
      />
    </Stack.Navigator>
  );
};

export default ProjectHomeStack