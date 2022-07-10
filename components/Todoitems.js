import React from "react"
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Todoitems = ({item,deletTodo}) =>{
    return (
        <TouchableOpacity
            onLongPress={()=> deletTodo(item.id)}
            style={styles.todo}>
            <Text style={styles.text}>
                {item.text}
            </Text>
            <TouchableOpacity onPress={()=> deletTodo(item.id)}>
                <Text>
                    &#128465;
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}
export default Todoitems

const styles = StyleSheet.create({
  todo:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      padding: 10,
      backgroundColor: 'white',
      margin: 5,
      borderRadius: 5,
  },
  text:{
      fontSize: 15,
  }
});