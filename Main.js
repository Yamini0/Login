import React from 'react';
import Splash from "./screens/Splash";
import AppNavigator from "./Navigation";


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'Splash' };
        setTimeout(() => {
            this.setState({ currentScreen: "AppNavigator" })
        }, 2000)
    }

    render() {
        const { currentScreen } = this.state;
        let mainScreen = currentScreen === "Splash" ? <Splash/> : <AppNavigator/>;
        return mainScreen;
    }


}


