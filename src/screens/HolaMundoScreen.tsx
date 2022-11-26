import React from 'react'
import { View, Text } from 'react-native'

// Functional component común y corriente
export const HolaMundoScreen = () => {
  return (
    <View style = { { 
        flex: 1,
        justifyContent: 'center'
       } } >
        <Text style = {{
          fontSize: 45,
          textAlign: 'center'
        }}>
          Hola George!</Text>
    </View>
  )
}
