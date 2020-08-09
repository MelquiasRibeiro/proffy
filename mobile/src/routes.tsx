import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home/index';
import GiveClass from './screens/GiveClasses/index';

const Appstack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Appstack.Navigator headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor:'#f0f0f5'
                }
            }}
            >
                <Appstack.Screen name="Home" component={Home}/>
                <Appstack.Screen name="GiveClass" component={GiveClass}/>


            </Appstack.Navigator>
        </NavigationContainer>
    )
}

export default Routes