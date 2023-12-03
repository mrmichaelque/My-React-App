import React from 'react';
import { View, Text, Button } from 'react-native';
import './App.css';
import Header from './components/Header.jsx'; // Assuming the correct path to your Header component
import Footer from './components/Footer.jsx'; // Assuming the correct path to your Footer component 
function Home() {
  return (
    <div className="App">
      <Header />
      <h1>Welcome to My App</h1>
      <p>This is happening</p>
      {/* Additional content goes here */}
      <Footer />
    </div>
  );
}
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Welcome to the Home Screen!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
        style={{ marginTop: 20, top: 20 }}
      />
    </View>
  );
}
