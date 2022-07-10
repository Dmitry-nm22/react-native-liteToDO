import { StyleSheet, Text, View } from 'react-native';
import Header from "../components/Header";

export default function Films() {
    return (
        <View>
            <Header/>
            <Text>Films</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems : "center"
    },
});