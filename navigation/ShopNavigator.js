import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from 'react-native';

import CategoryScreen from "../screens/CategorysScreen";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";
import BreadDetailScreen from "../screens/BreadDetailScreen";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return (
          <Stack.Navigator initialRouteName="Home"  
            screenOptions={{
                    headerStyle: {
                      backgroundColor: Platform.OS === 'android' ? COLORS.primary: COLORS.accent
                    },
                    headerTintColor: Platform.OS === 'android' ? 'black' :COLORS.primary,
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}>
                
                <Stack.Screen 
                name="Home" 
                component={CategoryScreen}
                options={
                    {
                        title:'Mi Pan'
                    }
                }              
                />
                <Stack.Screen 
                name="Products" 
                component={CategoryBreadScreen}
                options={({route})=> ({title: route.params.name})}
                />
                <Stack.Screen 
                name="Details" 
                component={BreadDetailScreen}
                options={({route})=> ({title: route.params.name})}
                />
            </Stack.Navigator>
    )
}
export default ShopNavigator;