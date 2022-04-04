import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Categories from './pages/Categories';
import MealDetail from './pages/MealDetail';
import Meals from './pages/Meals';

const Stack = createNativeStackNavigator();

const Router = () => {
  const style = {headerTitleStyle:{color: '#FFA500'}, headerTintColor: '#FFA500', headerTitleAlign: 'center'};

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} options={style} />
        <Stack.Screen name="MealDetail" component={MealDetail} options={style} />
        <Stack.Screen name="Meals" component={Meals} options={style} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;