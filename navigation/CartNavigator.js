import React from "react";
import { Platform} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {COLORS} from '../constants/colors'
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

const CartNavigator =()=>{
    return(
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={{
                headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.primary: COLORS.accent
                },
                headerTintColor: Platform.OS === 'android' ? 'black' :COLORS.primary,
                headerTitleStyle: {
                fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen 
                name="Cart" 
                component={CartScreen} 
                options={{title:'carrito'}}                          
            />
        </Stack.Navigator>
    )
}
export default CartNavigator;