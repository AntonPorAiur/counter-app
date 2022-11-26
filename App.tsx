import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';
import { Contador } from './src/screens/Contador';
import { Flex } from './src/screens/Flex';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

const App = () => {
  
  return (

    <SafeAreaView style = { style.container } >
      {/* <HolaMundoScreen/> */}
      {/* <Contador/>*/}
      <Flex/>
    </SafeAreaView>
    
  )
}

const style = StyleSheet.create( { 
  container: {
    flex: 1
  }
});

export default App;