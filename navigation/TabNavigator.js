import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import ShopNavigator from "../navigation/ShopNavigator";
import CartNavigator from "../navigation/CartNavigator";
import OrderItemScreen from "../screens/orderItemScreen";
import Ionicons from '@expo/vector-icons/Ionicons'
import OrderNavigator from "./OrderNavigator";
import PlaceNavigator from "./PlaceNavigator";


const BottomsTabs = createBottomTabNavigator()

const TabNavigator = () =>{
    return(
        <BottomsTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel:false,
                tabBarStyle: styles.tabBar,                          
            }}
        >
            <BottomsTabs.Screen 
                name='ShopTab'
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({focused})=>(
                        <View style={styles.item}>
                            <Ionicons name='md-home' size='24' color='black' />
                            <Text>
                                TIENDA
                            </Text>
                        </View>

                    )
                }}
            />
            <BottomsTabs.Screen 
                name='CartTab'
                component={CartNavigator}
                options={{
                    tabBarIcon: ({focused})=>(
                        <View style={styles.item}>
                            <Ionicons name='md-home' size='24' color='black' />
                            <Text>
                                CARRITO
                            </Text>
                        </View>
                    )
                }}
            />
            <BottomsTabs.Screen 
                name='OrderTab'
                component={OrderItemScreen}
                options={{
                    tabBarIcon: ({focused})=>(
                        <View style={styles.item}>
                            <Ionicons name='md-hammer' size='24' color='black' />
                            <Text>
                                Order
                            </Text>
                        </View>
                    )
                }}
            />
            <BottomsTabs.Screen
            name="Location"
            component={PlaceNavigator}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                        <Ionicons name='location-outline' size={24} color={focused ? 'blue' : 'black'} />
                        <Text style={{ color: focused ? 'blue' : 'black'}}>Location</Text>
                    </View>
                )
            }}
        />
        </BottomsTabs.Navigator>
    )
}
const styles = StyleSheet.create({
    tabBar:{
        shadowColor:'#24CE74',
        shadowOffset:{width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius:0.25,
        elevation: 5,
        position:"absolute",
        bottom: 25,
        left: 20,
        right:20, 
        borderRadius: 15,
        height:90,
        backgroundColor:'#7BEEB1',
    },
    item: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
})
export default TabNavigator;