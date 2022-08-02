import React from 'react';
import {CreateBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/IonIcons';
import Feed from '../screens/Feed';
import CreateStory from '../screens/CreateStory';

const Tab = CreateBottomTabNavigator();

const BottomTabNavigator =()=>{
    <Tab.Navigator 
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = focused
              ? 'book'
              : 'book-outline';
          } else if (route.name === 'CrearHistoria') {
            iconName = focused ? 'create' : 'create-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Índice" component={Feed} />
      <Tab.Screen name="CrearHistoria" component={CreateStory} />

></Tab.Navigator>
}

export default ButtonTabNavigator();