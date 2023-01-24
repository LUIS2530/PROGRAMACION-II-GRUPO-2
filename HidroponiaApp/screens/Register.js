// librerias para hacer el frontend
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Appearance } from 'react-native';
//import {LinearGradient} from 'expo-linear-gradient';
// componentes creados
import MyComponent from '../components/userInput';   // componente input
import Button from "../components/button"

import { saveUser } from '../api';

// recibe como parametro navigation para poder cambiar las screens
const Register = ({ navigation }) => {
    // al presionar el boton de registrar se almacenan el contenido de los input 
    // en la variable state en los atributos que posee
    const [state,setState] = useState({
        NAME: "",
        SURNAME: "",
        EMAIL:"",
        E_PASSWORD:'',
        PHONE:"",
    })

    // funcion para indicar el nombre del atributo "state" a usar y que valor debe tener
    const handleChangeText = (name, value) => {
        setState({...state, [name]: value}) 
    }

    const handleSubmit = () => {
        console.log(state)
        saveUser(state)
        navigation.navigate("MyTabs")
    }



    // cuando se presiona el boton registro esto se ejecuta
    // revision del contenido de la variable "state" y ejecuta la autenticacion
    const DARK_COLORS = ["#00c3ff", "#ffff1c"];
    const LIGHT_COLORS = ["#00c3ff", "#ffff1c"];


    return (
    <ScrollView>
        <View style = {styles.loginText}>
            <Text style={styles.textLogin}>Register</Text>
        </View>

        <StatusBar style="auto" />

        <View style = {styles.inputLogin}>
            <MyComponent 
                label="Name" 
                placeholder="Type your name"
                secureTextEntry = {false}
                onChangeText={(value) => handleChangeText("NAME", value)}/>
            <MyComponent 
                label="Surname"  
                placeholder="Type your surname"
                secureTextEntry = {false}
                onChangeText={(value) => handleChangeText("SURNAME", value)}/>
            <MyComponent 
                label="Phone" 
                placeholder="Type your phone"
                secureTextEntry = {false}
                onChangeText={(value) => handleChangeText("PHONE", Number(value))}/>
            <MyComponent 
                label="Email" 
                placeholder="Type your Email"
                secureTextEntry = {false}
                onChangeText={(value) => handleChangeText("EMAIL", value)}/>
            <MyComponent 
                label="Password" 
                placeholder="Type your password"
                secureTextEntry = {true}
                right= {true}
                onChangeText={(value) => handleChangeText("E_PASSWORD", value)}/>
        </View>
        
        <View style = {styles.loginButton}>
            <Button onPress={() => handleSubmit()} buttonText="Crear cuenta"/>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
    },
    loginText: {
        marginTop: 30,
        justifyContent: 'flex-start',
    },
    textLogin: {
        textAlign: 'center',
        margin: 24,
        fontSize: 50,
    },
    inputLogin:{
        marginTop: 10,
    },
    loginButton:{
        marginTop: 100,
        marginHorizontal: 70,
    },
})

export default Register;