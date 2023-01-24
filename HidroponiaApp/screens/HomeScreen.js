import * as React from 'react';
import { StyleSheet, View, ScrollView, RefreshControl, Linking, TouchableOpacity } from 'react-native';
import MyComponent from "../components/homeScreenCard";
import Button from "../components/button"
import { Divider, Text, Appbar } from 'react-native-paper'
import { Drawer } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { getUserInfo,
    getSensorsLuminocidad, 
    getSensorsHumedad, 
    getSensorsTemperatura,
    getActuatorsFoco,
    getActuatorsBomba,
    getActuatorsVentilador} from "../api";



const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const App = () => {

    const [refreshing, setRefreshing] = React.useState(false);
    const [active, setActive] = React.useState('');
    const [userData, setUserData] = React.useState('');
    const [sensorData, setSensorData] = React.useState('');

    const handleURLChange = async () => {
        await Linking.openURL("https://drive.google.com/drive/folders/1i-65kfGv6Nasr_c3nu7_M4C7Kr6BZGtz")
    }

    const loadUserInfo = async () => {
        const datos = await getUserInfo(1)
        setUserData(datos)
    }

    const loadSensorInfo = async () => {
        const sensores = await getSensorsHumedad()
        //console.log("loaded")
        setSensorData(sensores)
        //console.log(sensorData)
    }

    //const unsub = () => {
    //    setLuminosidad(doc.data().luminosidad)
    //    setTemp(doc.data().temperatura)
    //    setState(doc.data().estado)
    //    doc.data().motor === false ? setTextMotor("Disabled") : setTextMotor("Activate")
    //    doc.data().ventilador === false ? setTextVentilador("Disabled") : setTextVentilador("Activate")
    //};

    React.useEffect(() => {
    loadUserInfo()
    //loadSensorInfo()
    },[])

    React.useEffect(() => {
        loadSensorInfo()
        wait(2000)
        
    })

    const onRefresh = React.useCallback(async() => {
    setRefreshing(true);
    await loadSensorInfo();
    wait(2000).then(() => {
        setRefreshing(false)});
    }, []);

    return (
    <ScrollView 
        styles={styles.container}
        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />}>
        <Appbar.Header>
            <Appbar.Content title="Home"/>
            <TouchableOpacity>
                <Avatar.Text size={30} label="LA" onPress={()=> console.log("hola")}/>
            </TouchableOpacity>
        </Appbar.Header>
        <View style={styles.elements}>
            <View style={styles.elementsLeft}>
                <MyComponent 
                    title="Sistema 1"
                    paragraph="N° Plantas: "
                    require={require("../assets/fotoHomeScreen.jpeg")}
                    onPress={() => handleURLChange()} />
            </View>
            <View style={styles.elementsRight}>
                <Text variant="titleLarge">DATOS</Text>
                <Divider bold={true}/>

                <Text variant="titleMedium">Temperatura:</Text>
                <Text variant="bodyLarge">{sensorData.DATO}°C</Text>
                <Text style={styles.textprinc}></Text>

                <Text variant="titleMedium">Humedad:</Text>
                <Text variant="bodyLarge">2</Text>
                <Text style={styles.textprinc}></Text>

                <Text variant="titleMedium">Luminocidad:</Text>
                <Text variant="bodyLarge">1</Text>
                <Text style={styles.textprinc}></Text>

                <Text variant="titleMedium">Foco:</Text>
                <Button onPress={() => console.log(userData)} buttonText="Press"/>
                <Text style={styles.textprinc}></Text>

                <Text variant="titleMedium">Motor:</Text>
                <Button onPress={() => handleURLChange()} buttonText="Press" icon="camera"/>
                <Text style={styles.textprinc}></Text>

                <Text variant="titleMedium">Ventilacion:</Text>
                <Button onPress={() => handleURLChange()} buttonText="Press" icon="camera"/>
                <Text style={styles.textprinc}></Text>

                <Text variant="titleMedium">Estado:</Text>
                <Text variant="bodyLarge">State</Text>
            </View>
            
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    elements:{
        marginTop: 12,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    elementsLeft: {
        flex: 1,
        marginHorizontal: 8,
        marginVertical: 5,
    },
    elementsRight: {
        flex: 1,
        marginHorizontal: 12,
        marginTop: 20,
        marginVertical:5,
    },
    textprinc:{
        fontSize: 20,
    },
})

export default App;