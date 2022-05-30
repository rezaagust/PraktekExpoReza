import { NavigatorContainer } from '@react-navigation/native'
import React from 'react'

export default function Home() {
  return (
    <NavigatorContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigatorContainer>
  )
}