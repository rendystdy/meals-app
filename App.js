/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
// import {enableScreens} from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';
import rootStore from './store/store';

// enableScreens();

const App = () => {
  return (
    <Provider store={rootStore}>
      <MealsNavigator />
    </Provider>
  );
};

export default App;
