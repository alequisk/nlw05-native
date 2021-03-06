import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { Confirmation } from '../pages/Confirmation';
import { UserIdentification } from '../pages/UserIdentification';

const StackRoutes = createStackNavigator();

import colors from '../styles/colors';

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >
    <StackRoutes.Screen
      name="Welcome"
      component={Welcome}
    />
    <StackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />

    <StackRoutes.Screen
      name="Confirmation"
      component={Confirmation}
    />
  </StackRoutes.Navigator>
);

export default AppRoutes;