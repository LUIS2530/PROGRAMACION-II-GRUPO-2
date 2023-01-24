import React from "react"
import Navigation from "./Navigation"
import { NavigationContainer } from '@react-navigation/native';  // Crea un contenedor de screens
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation /> 
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;