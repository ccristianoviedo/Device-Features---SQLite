import React from "react";
import { Platform} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {COLORS} from '../constants/colors'
import OrderItemScreen from "../screens/orderItemScreen";

const Stack = createNativeStackNavigator();

const OrderNavigator =()=>{
    return(
        <Stack.Navigator
            initialRouteName='Order'
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
                name="Order" 
                component={OrderItemScreen} 
                options={{title:'carrito'}}                          
            />
        </Stack.Navigator>
    )
}
export default OrderNavigator;