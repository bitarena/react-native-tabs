import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import ScarletScreen from './src/ScarletScreen';
import GrayScreen from './src/GrayScreen';
import GoldScreen from './src/GoldScreen';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
};

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
          tabBarPosition={'bottom'}
          hideNavBar
        >
          <Scene
            key="osu" 
            title="Tab1" 
            icon={TabIcon}
            hideNavBar
          >
            <Scene 
              key="scarlet"
              component={ScarletScreen}
              title="Scarlet"
              initial
            />
          </Scene>

          <Scene
            key="um"
            title="Tab2"
            icon={TabIcon}
            hideNavBar
          >
            <Scene
              key="gray"
              component={GrayScreen}
              title="Gray"
            />
          </Scene>

          <Scene 
            key="vu" 
            title="Tab3"
            icon={TabIcon}
            hideNavBar
          >
            <Scene
              key="gold"
              component={GoldScreen}
              title="Gold"
            />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
}

export default App;
