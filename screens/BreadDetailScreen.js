import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/actions/cart.action";


const BreadDetailScreen=()=>{

    const dispatch = useDispatch();
    const bread = useSelector(state=> state.breads.selected)
    //const breadID = useSelector(state=> state.bread.selectedID)
    //const breads = useSelector(state => state.breads.list)
    //const bread = breads.find(item=> item.id===breadID)

    const handlreAddItemCart =()=>dispatch(addItem(bread))

    return(
        <View style={styles.breadItem}>
            <Text style={styles.title}>{bread.name}</Text>
            <Text style={styles.title}>{bread.description}</Text>            
            <Text style={styles.detail}>Precio: {bread.price}</Text>
            <Text style={styles.detail}>Peso: {bread.weight}</Text>
            <Button title="AGREGAR AL CARRITO" onPress={handlreAddItemCart}/>
            <Ionicons name='cart' size={24} color='white'              
            />
        </View>      
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
export default BreadDetailScreen;