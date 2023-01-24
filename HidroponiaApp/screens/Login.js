// librerias para hacer el frontend
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import Button from "../components/button"
import {LinearGradient} from 'expo-linear-gradient';
//import {LinearGradient} from 'expo-linear-gradient';   // fondo gradiente
// componentes creados
import MyComponent from "../components/userInput"; // componente input

import { getUsers } from "../api";


const Login = ({ navigation }) => {
  const DARK_COLORS = ["#00c3ff", "#ffff1c"];
  const LIGHT_COLORS = ["#00c3ff", "#ffff1c"];

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  // funcion para indicar el nombre del atributo "state" a usar y que valor debe tener
  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const searchBDUser = async () => {
    const data = await getUsers();
    console.log(data.EMAIL, data.PASSWORD)
    const email = data.find(
      (user) =>
        user.EMAIL == state.email.toLocaleLowerCase() &&
        user.E_PASSWORD == state.password
    );
    if (!email) {
      alert("Usuario no encontrado, revise el email y contraseña");
    } else {
      const ID_USER = email.ID_USERS
      navigation.navigate("HomeScreen");
    }
    console.log(email);
  };

  
  return (
    <ScrollView>
    <LinearGradient // Background Linear Gradient
        colors={['#00c3ff', "#ffff1c"]}
        style={styles.container}>
      <View style={styles.loginText}>
        <Text style={styles.textLogin}>LOGIN</Text>
      </View>

      <StatusBar style="auto" />

      <View style={styles.inputLogin}>
        <MyComponent
          label="Email"
          placeholder="Type your email"
          secureTextEntry={false}
          onChangeText={(value) => handleChangeText("email", value)}
        />
        <MyComponent
          label="Password"
          placeholder="Type your password"
          secureTextEntry={true}
          right={true}
          onChangeText={(value) => handleChangeText("password", value)}
        />
      </View>

      <View style={styles.loginButton}>
        <View style={styles.loginButton1}>
        <Button 
          onPress={() => searchBDUser()} 
          buttonText="Iniciar Sesion"
        />
        </View>

        <View style={styles.loginButton2}>
        <Button 
          onPress={() => navigation.navigate("Register")} 
          buttonText="Register"
        />
        </View>
      </View>

    </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  loginText: {
    marginTop: 50,
    justifyContent: "flex-start",
  },
  textLogin: {
    textAlign: "center",
    margin: 24,
    fontSize: 50,
    fontWeight: "bold",
  },
  inputLogin: {
    marginTop: 65,
  },
  loginButton: {
    marginTop: 240,
    marginHorizontal: 70,
  },
  loginButton1:{
    marginVertical:5,
  },
  loginButton2:{
    marginVertical:5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#841584",
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 20,
    marginBottom: 10,
  },
  textbuttonLogin: {
    textAlign: "center",
    fontSize: 18,
  },
});

export default Login;
