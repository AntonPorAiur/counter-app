import React, { useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native';
import { Fab } from '../components/Fab';

// Los hooks de react funcionan igual para react native

export const Contador = () => {

  const [contador, setContador] = useState(10);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <View style={ styles.content } >

      <Text style={ styles.contadorText }>
        Contador: { contador }
      </Text>

      <Fab
        tittle = "+1"
        position = 'bl'
        onPress={ () => setContador(contador + 1) }
      />

      <Fab
        tittle = "-1"
        position = 'br'
        onPress={ () => setContador(contador - 1) }
      />     

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  contadorText: {
    textAlign: 'center',
    fontSize: 40,
    // position: 'relative',
    // relative es la posición por defecto
    top: -15
  }
})