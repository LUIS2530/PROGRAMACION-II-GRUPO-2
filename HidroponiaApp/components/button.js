import * as React from 'react';
import { Button } from 'react-native-paper';

const MyComponent = (props) => (
    <Button 
        icon = {props.icon}
        //icon="camera" 
        mode="contained" onPress={props.onPress}>
        {props.buttonText}
    </Button>
);

export default MyComponent;