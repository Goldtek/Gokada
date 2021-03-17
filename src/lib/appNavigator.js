import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Users from "../components/screens/users";
import Logs from "../components/screens/logs";
import { colors } from '../components/styles';

const Drawer = createDrawerNavigator();


export const PublicNavigator = () => (
  <Drawer.Navigator initialRouteName="Users">
    <Drawer.Screen name="Users" component={Users} />
    <Drawer.Screen name="Logs" component={Logs} />
  
    {/* <Drawer.Screen name="EditProfile" component={EditProfile} />
    <Drawer.Screen name="Messages" component={Messages} /> */}
  </Drawer.Navigator>
);