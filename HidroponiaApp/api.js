//const API_WIFI = "http://192.168.0.6:3000/users"
//const API = "http://192.168.229.79:3000/users"
//const API = "https://backendnodejsrailway.up.railway.app"
const API = "http://192.168.0.7:3000"


//USERS DATA
export const getUsers = async () => {
    const res = await fetch(`${API}/users`)
    return await res.json()
}

export const saveUser = async (newUser) => {
    const res = await fetch(`${API}/users`, {
        method: "POST", 
        headers:{"Accept": "application/json", "Content-Type":"application/json"},
        body: JSON.stringify(newUser)});
    return await res.json();
}

export const deleteUser = async (id) => {
    await fetch(`${API}/users/${id}`, {
        method : "DELETE",
})}

export const getUserInfo = async (id) => {
    const res = await fetch(`${API}/users/${id}`)
    return await res.json();
}

//SENSORS DATA
export const getSensorsLuminocidad = async () => {
    const res = await fetch(`${API}/sensores/luminocidad`)
    return await res.json()
}

export const getSensorsHumedad = async () => {
    const res = await fetch(`${API}/sensores/humedad`)
    return await res.json();
}

export const getSensorsTemperatura = async () => {
    const res = await fetch(`${API}/sensores/temperatura`)
    return await res.json()
}

//ACTUATORS DATA
export const getActuatorsFoco = async () => {
    const res = await fetch(`${API}/actuadores/foco`)
    return await res.json()
}

export const getActuatorsBomba = async () => {
    const res = await fetch(`${API}/actuadores/bomba`)
    return await res.json();
}

export const getActuatorsVentilador = async () => {
    const res = await fetch(`${API}/actuadores/ventilador`)
    return await res.json()
}
