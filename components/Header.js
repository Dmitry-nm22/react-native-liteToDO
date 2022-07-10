import React from "react";
import {View, Image, StyleSheet, } from "react-native"

const Header = () => {
    return (
        <View style={styles.header} >
            <Image
                source={require('../assets/logo.jpg')}
                style={styles.logo}
            />
        </View>
    )
}
export default  Header

const styles = StyleSheet.create({
    header:{
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    logo:{
        maxWidth: 250,
        //width: '100%' ,
        height: 40,
    }
});