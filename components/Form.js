import React from "react"
import {View, TextInput, StyleSheet, Button,TouchableOpacity} from 'react-native';
import uuid from 'react-native-uuid'

const Form = ({AddTodo}) => {
    const [inputValue, setInputValue] = React.useState('')
    return(
        <View style={styles.view}>
            <TextInput
                placeholder={'add to do'}
                style={styles.textInput}
                onChangeText={text => setInputValue(text)}
                value={inputValue}
            />
                <Button
                    title={'add'}
                    color="black"
                    disabled={!inputValue}
                    onPress={()=> {
                        AddTodo({
                            id: uuid.v4(),
                            text: inputValue
                        })
                        setInputValue('')
                    }}


                />
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    textInput: {
        padding:15,
        margin: 15,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset:{width:1, height:1},
        shadowOpacity: .3,
        shadowRadius: 3,
        width: 300,
    },
    view:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
    },
    btn:{

    }
});