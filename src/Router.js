import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainScreen from './screens/MainScreen';
import DetailsScreen from './screens/DetailsScreen';


const RouterComponent = () => {
    return (
        <Router
            navigationBarStyle={{
                backgroundColor: 'light-grey'
            }}
        >
            <Scene>
                <Scene
                    initial
                    title={'Main Screen'}
                    type={'replace'}
                    key="MainScreen"
                    component={MainScreen}
                />
                <Scene
                    title={'Details Screen'}
                    key="DetailsScreen"
                    component={DetailsScreen}
                />
            </Scene>
        </Router>
    );
};
export default RouterComponent;
