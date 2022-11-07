import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './src/navigations/AuthNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default App;
