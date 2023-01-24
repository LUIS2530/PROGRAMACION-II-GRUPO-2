import {pool} from "../db.js"

// users tasks

export const getSensor = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM SENSOR_INFO WHERE SENSORES_idSENSORES = ? ORDER BY FECHA DESC", [
        req.params.id]);
    res.json(rows)
}

export const getSensorTemperatura = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM SENSOR_INFO WHERE SENSORES_idSENSORES = 1 ORDER BY FECHA DESC LIMIT 1;")
    console.log(rows)
    res.json(rows[0])
}

export const getSensorHumedad = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM SENSOR_INFO WHERE SENSORES_idSENSORES = 2 ORDER BY FECHA DESC LIMIT 1;")
    console.log(rows)
    res.json(rows[0])
}

export const getSensorLuminocidad = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM SENSOR_INFO WHERE SENSORES_idSENSORES = 3 ORDER BY FECHA DESC LIMIT 1;")
    console.log(rows)
    res.json(rows[0])
}


