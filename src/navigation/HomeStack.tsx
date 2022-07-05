import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home/Home'
import About from '../screens/About/About'
import NotFound from '../screens/NotFound/NotFound'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#1d2d30',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontSize:20,
        fontWeight:'bold',
        
      }
    }}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='About' component={About} options={{title:'Asteroid Details'}}/>
        <Stack.Screen name='NotFound' component={NotFound}/>
    </Stack.Navigator>
  )
}



export default HomeStack