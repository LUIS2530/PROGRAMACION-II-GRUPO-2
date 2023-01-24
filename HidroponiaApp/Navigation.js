//// importando modulos necesarios para la navegacion
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //Barra inf de navegacion(TabBar)
import { createStackNavigator } from '@react-navigation/stack'; // Crea las screens
import Icon from "react-native-vector-icons/Ionicons" // Introduce iconos en la TabBar

///  importando screens
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Register from "./screens/Register"

//const Tab = createBottomTabNavigator(); // constante que crea una Navegacion de la TabBar
const Stack = createStackNavigator(); // constante que crea una Navegacion de screens

///// Contenedor de las screens se inicia con la screen Login
function MyLogin() {
    return(
        <Stack.Navigator>
            
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{
                    headerShown: false,
                }}/>
            <Stack.Screen 
                name="Register"  
                component={Register} 
                options={{
                    title: '',
                    headerShown: true,
                    headerTransparent: true,
                }}/>
            <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{
                    headerShown: false,
                }}/>
        </Stack.Navigator>
    )
}

/// contenedor de las screens de la TabBar


/// Esto es lo que se ejecuta cuando viene de la App.js
// Se crea un NavigationContainer (contenedor de Screens)
// Dentro de la NavigationContainer van las screens, 
//estas screens estan en el componente MyLogin

// <MyTabs / >
export default MyLogin;