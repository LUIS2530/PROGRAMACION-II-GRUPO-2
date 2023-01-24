import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const MyComponent = (props) => {
    const [secureTextEntry, setSecureTextEntry] = React.useState(props.secureTextEntry);

    return (
    <TextInput
        style={styles.input}
        label={props.label}
        placeholder={props.placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={props.onChangeText}
        left={props.left == true ? (<TextInput.Icon icon={props.iconLeft}/>): false}
        right={props.right == true ? 
        (<TextInput.Icon icon="eye" onPress={()=>{setSecureTextEntry(!secureTextEntry)}}/>): false}
    />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    loginText: {
        marginTop: 50,
        justifyContent: 'flex-start',
    },
    textLogin: {
        textAlign: 'center',
        margin: 24,
        fontSize: 50,
        fontWeight: "bold",
    },
    inputLogin:{
        marginTop: 65,
        marginLeft:20,
        marginRight:20,
        //padding: 5,
    },
    input: {
        width: 350,
        height: 50,
        margin: 20,
        borderWidth: 1,
        padding: 2,
    },
})

export default MyComponent;