// app/index.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import ScarletScreen from './src/ScarletScreen';
import GrayScreen from './src/GrayScreen';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="scarlet"
          component={ScarletScreen}
          title="Scarlet"
          initial
        />
        <Scene
          key="gray"
          component={GrayScreen}
          title="Gray"
        />
      </Scene>
    </Router>
  );
}

export default App;
