import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import HomeScreen from './screens/homeScreen';
import CurrentTrackScreen from './screens/currentTrackScreen';
import AchievementsScreen from './screens/achievementsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='CurrentTrack' component={CurrentTrackScreen} />
        <Stack.Screen name='Achievements' component={AchievementsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
