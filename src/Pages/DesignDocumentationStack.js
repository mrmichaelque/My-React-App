// DesignDocumentationStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  DesignDocumentationScreen from '../screens/DocumentationScreen';

const Stack = createStackNavigator();

const DesignDocumentationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DesignDocumentationStack" component={DesignDocumentationStack} />
    </Stack.Navigator>
  );
};

export default DesignDocumentationStack;
