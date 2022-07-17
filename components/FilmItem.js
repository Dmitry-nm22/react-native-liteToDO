import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native"

const filmItem = ({film}) => {
    return (
        <TouchableOpacity style={styles.filmItem}>
            <Image
                source={{uri: `https://image.tmdb.org/t/p/w342${film.posterPath}`}}
                style={styles.image}
            />
            <Text style={styles.title}>
                {film.title}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    filmItem:{
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 15
    },
    image:{
        width:200,
        height: 200,
        resizeMode:'contain'
    },
    title:{
        fontSize:18,
        fontWeight: '500',
        marginTop: 5,
        textAlign: 'center'
    }
});

export default filmItem