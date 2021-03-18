import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Users from "../components/screens/users";
import Logs from "../components/screens/logs";

const Drawer = createDrawerNavigator();


export const PublicNavigator = () => (
  <Drawer.Navigator initialRouteName="Users">
    <Drawer.Screen name="Users" component={Users} />
    <Drawer.Screen name="Logs" component={Logs} />
  </Drawer.Navigator>
);