// ExploreEngageStack.js
import React from 'react';
import 
import { createStackNavigator } from '@react-navigation/stack';
import ExploreEngageStack from '../screens/ExploreEngageStackn';

const Stack = createStackNavigator();

const ExploreEngageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ExploreEngageStack" component={ExploreEngageStack} />
      <Stack.Screen name="Engage" component={EngageScreen} />
    </Stack.Navigator>
  );
};

export default ExploreEngageStack;
