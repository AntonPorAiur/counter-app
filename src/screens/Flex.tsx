import React from 'react'
import { StyleSheet, View } from 'react-native';

export const Flex = () => {
  return (
    <View style = { style.container } >
        <View style = { style.cajaMorada } ></View>
        <View style = { style.cajaNaranja } ></View>
        <View style = { style.cajaAzul } ></View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor: '#28425B',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        height: 100,
        width: 100,
        borderColor: 'white',
        borderWidth: 10,
        top: 100
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
        height: 100,
        width: 100,
        borderColor: 'white',
        borderWidth: 10,
        left: 100
    },
    cajaAzul: {
        backgroundColor: '#28C4D9',
        height: 100,
        width: 100,
        borderColor: 'white',
        borderWidth: 10
    }
});
