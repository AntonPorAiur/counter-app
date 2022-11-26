import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    tittle: string,
    position?: 'br' | 'bl'
    onPress: () => void;
}

export const Fab = ({ tittle, onPress, position = 'br' }: Props) => {

    return (
        <TouchableOpacity
            style={ [ styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right ]}
            onPress={ onPress }
        >
            <View style={ styles.fab }>
                <Text style={ styles.fabText }> { tittle } </Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    left: {
        left: 25
    },
    right: {
        right: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        borderRadius: 80,
        width: 60,
        height: 60,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12
    },
    fabDecrement: {
        backgroundColor: '#5856D6',
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})

