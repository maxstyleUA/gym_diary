import React from 'react'
import Navigation from './components/Navigation'
import Workout from './pages/Workout'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Exercises from './pages/Exercices'

export type RootStackParamList = {
  Exercices: undefined
  Workout: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Navigation}
          options={{ title: 'GYM diary' }}
        />
        <Stack.Screen name="Exercises" component={Exercises} />
        <Stack.Screen name="Workout" component={Workout} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
