import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '../../core/ThemeContext'; // Import useTheme
import Blank from '../screens/Blank/BlankScreen';
import { getScreenOptions } from './navigation.options';
import { Div, ButtonGroup } from 'atomize'; // Import Div and ButtonGroup from atomize

const Stack = createStackNavigator();

const BlankStack = () => {
  const { theme } = useTheme(); // Use useTheme to get the theme
  const screenOptions = getScreenOptions(theme);

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Blank" component={Blank} />
    </Stack.Navigator>
  );
};

const ProfileHomeStack = () => {
  return (
    <Div className="container">
      <Div className="content">
        <h1>
          Michael is an Innovator,<br />
          a Change Management Agent,<br />
          and a Project Manager.
        </h1>
        <h3>
          Driving client success in San Francisco Bay Area, CA for 10 years!
          With a strong background in finance and leadership, I am seeking to
          transition my skills and knowledge into project management. I am
          committed to delivering positive results and contributing to
          innovative solutions that improve work efficiency and support
          business growth. Whether through workshops or certification, I stay
          on top of my game through continuous learning.
        </h3>
        <ButtonGroup>
          <button className="button">Read More</button>
        </ButtonGroup>
        <Div style={{ paddingTop: '50px' }}>
          <hr />
        </Div>
        <h3>
          <Div style={{ paddingTop: '50px' }}>
            <strong>An Open Letter to Hiring Teams</strong>
            <Div className="letter-buttons">
              <button>Cover Letter</button>
              <button>Resume</button>
            </Div>
          </Div>
        </h3>
      </Div>
    </Div>
  );
};

export default ProfileHomeStack
