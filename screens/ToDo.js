import React from "react"
import {StyleSheet, SafeAreaView, ImageBackground, FlatList, Text,} from 'react-native';
import Todoitems from "../components/Todoitems";
import Form from "../components/Form";



export default function Todo() {
    const [todoItems, setTodoItems] = React.useState([])

    const AddTodo = (newItem) =>{
        setTodoItems(
            [...todoItems, {...newItem}]
        )
    }
    const deletTodo = (id) =>{
        setTodoItems((newList)=>{
            return newList.filter(todoItems => id != todoItems.id)
        })
    }

    return (
        <SafeAreaView style={styles.app}>
            <ImageBackground
                source={require('../assets/bg.jpeg')}
                style={styles.bg}
            >
                {
                    todoItems.length
                    ? <Text>All: {todoItems.length}</Text>
                    : null
                }
                <FlatList
                    data={todoItems}
                    renderItem={ ({item}) => (
                        <Todoitems item={item}  deletTodo={deletTodo}/>
                    )}
                    keyExtractor={item => item.id}
                />
                <Form AddTodo={AddTodo}/>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    app:{
        flex: 1,
    },
    bg:{
        flex: 1,
    },

});