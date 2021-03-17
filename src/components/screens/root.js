/* eslint-disable no-nested-ternary */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { PublicNavigator } from '../../lib/appNavigator';

// create screen for signup
// create screen for intro

const Root = () => {

  return (
    <NavigationContainer>
       <PublicNavigator />
    </NavigationContainer>
  );
};

export default Root;
