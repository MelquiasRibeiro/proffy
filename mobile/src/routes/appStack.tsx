import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home/index';
import GiveClass from '../screens/GiveClasses/index';
import StudyTabs from './studyTabs';

const routes = createStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
            <routes.Navigator headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor:'#f0f0f5'
                }
            }}
            >
                <routes.Screen name="Home" component={Home}/>
                <routes.Screen name="GiveClass" component={GiveClass}/>
                <routes.Screen name="study" component={StudyTabs}/>


            </routes.Navigator>
        </NavigationContainer>
    )
}

export default AppStack