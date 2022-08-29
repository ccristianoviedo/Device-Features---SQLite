import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const BreadItem=({item, onSelected})=>{
    return(
        <TouchableOpacity
            onPress={()=>onSelected(item)}            
        >
            <View style={styles.breadItem}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <View>
                <Text style={styles.detail}>Precio: {item.price}</Text>
                <Text style={styles.detail}>Peso: {item.weight}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    title:{
        margin:15,
        fontSize: 28,
    },
    breadItem:{
        flex:1,
        margin:10,
        padding:20,
        backgroundColor:'#67D45A',
        borderRadius:3,
    },
    detail:{
        fontSize: 38,
        backgroundColor:'#A5DABE',
        border: 'black solid'
    }
})
export default BreadItem;