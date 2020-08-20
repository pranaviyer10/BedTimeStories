import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default class WriteScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    placeholder= "Write a story">
                </TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'  
    },
    inputBox: {
        width: 300,
        height: 500,
        borderWidth: 1.0,
        fontSize: 20,
    }
})