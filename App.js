import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import HomeScreen from './screens/homeScreen';
import CurrentTrackScreen from './screens/currentTrackScreen';
import AchievementsScreen from './screens/achievementsScreen';
import HistoricScreen from './screens/historicScreen';
import DetailScreen from './screens/detailScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={() => null} screenOptions={{headerShown: false}}>
        <Tab.Screen name='Register' component={RegisterScreen} />
        <Tab.Screen name='Login' component={LoginScreen} />
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='CurrentTrack' component={CurrentTrackScreen} />
        <Tab.Screen name='Achievements' component={AchievementsScreen} />
        <Tab.Screen name='Historic' component={HistoricScreen} />
        <Tab.Screen name='Detail' component={DetailScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
