import React from 'react'
import { useSelector } from 'react-redux';
import BottomNavigt from './BottomNavigt';
import ThisStack from './ThisStack';
import { NavigationContainer } from '@react-navigation/native';

const appSelector = useSelector;

const AppNavigation = () => {
    const appState = appSelector((state) => state.app);
    // const Name = appState.screenName;
    // console.log(Name)
    console.log("user=======", appState.user);

    return (
        <NavigationContainer>
            {appState.user ? <BottomNavigt /> : <ThisStack  />}
        </NavigationContainer>
    )
}

export default AppNavigation