import React from 'react';

import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar translucent barStyle="dark-content" />
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
