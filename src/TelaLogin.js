import React from 'react';
import {View, Text, InputText, StyleSheet} from 'react-native';

const FlexDimensionsBasic =() => {
    return (
        <View style = {{ flex : 1}}>
            <View style = {{ flex : 1, backgroundColor: 'pink'}} />
            <Text style = {StyleSheet.heading}> Tela Login</Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    heading: {
        fontSize:20,
        fontWeight : 'bold',
        marginBottom: 20,
    },
});

export default FlexDimensionsBasic;