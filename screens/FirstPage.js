import React from 'react';
import { View, Text } from 'react-native'

class FirstPage extends React.Component {
    constructor() {
        super();
        this.state = { someKey: 'someValue' };
    }

    render() {
        return (<View style={{ margin: 100 }}><Text>FIRST PAGE</Text></View>);
    }

}

export default FirstPage;
